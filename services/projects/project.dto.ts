export type ProjectDto = {
  project: string
  client: string
  owner: string
  year: string
  scope: string
  category: string
}

export type ProjectsResponseDto = {
  data: ProjectDto[]
  nextCursor: number | null
  total: number
}

export type ProjectsParamsDto = {
  category: string
  cursor: number
}
