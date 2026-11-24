export interface Control {
  id: string
  vipoCode: string
  name: string
  category: 'tv' | 'ac'
  originalRemoteCode: string | null
  photoUrl: string | null
  notes: string | null
  active: boolean
  brands: { id: string; name: string }[]
  models: string[]
}

export interface ControlsResponse {
  items: Control[]
  total: number
  page: number
  pageSize: number
}
