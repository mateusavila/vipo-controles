import { asc, desc, sql } from 'drizzle-orm'
import { searchTerms } from '../../database/schema'

interface RankedControl {
  id: string
  vipoCode: string
  name: string
  searchCount: number
  terms: { term: string, searchCount: number }[]
}

export default defineEventHandler(async event => {
  await requireAdmin(event)
  const db = identityDb(event)
  const [rows, terms] = await Promise.all([
    db.all<{
      id: string
      vipoCode: string
      name: string
      searchCount: number
      term: string
      termCount: number
    }>(sql`
      WITH ranked_controls AS (
        SELECT remote_control_id, SUM(search_count) AS total
        FROM remote_search_terms
        GROUP BY remote_control_id
        ORDER BY total DESC, remote_control_id
        LIMIT 25
      ), ranked_terms AS (
        SELECT hits.*, terms.term,
          ROW_NUMBER() OVER (
            PARTITION BY hits.remote_control_id
            ORDER BY hits.search_count DESC, terms.term, terms.id
          ) AS position
        FROM remote_search_terms hits
        JOIN ranked_controls ranked ON ranked.remote_control_id = hits.remote_control_id
        JOIN search_terms terms ON terms.id = hits.search_term_id
      )
      SELECT controls.id, controls.vipo_code AS vipoCode, controls.name, ranked.total AS searchCount,
        terms.term, terms.search_count AS termCount
      FROM ranked_controls ranked
      JOIN remote_controls controls ON controls.id = ranked.remote_control_id
      JOIN ranked_terms terms ON terms.remote_control_id = controls.id
      WHERE terms.position <= 10
      ORDER BY ranked.total DESC, controls.id, terms.position
    `),
    db.select().from(searchTerms).orderBy(desc(searchTerms.searchCount), asc(searchTerms.term)).limit(25).all(),
  ])
  const controls = new Map<string, RankedControl>()
  for (const { id, vipoCode, name, searchCount, term, termCount } of rows) {
    const control = controls.get(id) ?? { id, vipoCode, name, searchCount, terms: [] }
    control.terms.push({ term, searchCount: termCount })
    controls.set(id, control)
  }

  return { controls: Array.from(controls.values()), terms }
})
