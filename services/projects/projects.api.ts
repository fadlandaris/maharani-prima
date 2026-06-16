import { http } from '@/lib/api'
import type { ProjectsParamsDto, ProjectsResponseDto } from './project.dto'

export const projectsApi = {
  async getProjects(params: ProjectsParamsDto): Promise<ProjectsResponseDto> {
    const res = await http.get<ProjectsResponseDto>('projects', { params })
    return res.data
  },
}
