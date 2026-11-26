import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
import { r as requireAdmin } from '../../../_/requireAdmin.mjs';
import { i as identityDb } from '../../../_/identityDb.mjs';
import { sql, desc, asc } from 'drizzle-orm';
import { s as searchTerms } from '../../../_/catalog-schema.mjs';
import 'unhead/server';
import '../../../_/vue.mjs';
import 'unhead/legacy';
import 'unhead/plugins';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'nostics';
import 'uint8array-extras';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '../../../_/schema.mjs';
import 'drizzle-orm/sqlite-core';
import '@libsql/client';
import 'drizzle-orm/libsql';

const dashboard_get = defineEventHandler(async (event) => {
  var _a;
  await requireAdmin(event);
  const db = identityDb(event);
  const [rows, terms] = await Promise.all([
    db.all(sql`
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
    db.select().from(searchTerms).orderBy(desc(searchTerms.searchCount), asc(searchTerms.term)).limit(25).all()
  ]);
  const controls = /* @__PURE__ */ new Map();
  for (const { id, vipoCode, name, searchCount, term, termCount } of rows) {
    const control = (_a = controls.get(id)) != null ? _a : { id, vipoCode, name, searchCount, terms: [] };
    control.terms.push({ term, searchCount: termCount });
    controls.set(id, control);
  }
  return { controls: Array.from(controls.values()), terms };
});

export { dashboard_get as default };
//# sourceMappingURL=dashboard.get.mjs.map
