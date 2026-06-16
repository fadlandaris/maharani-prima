import { useInfiniteQuery, type InfiniteData } from '@tanstack/react-query'
import { projectsApi } from './projects.api'
import type { ProjectsResponseDto } from './project.dto'

export const projectKeys = {
  infinite: (category: string) => ['projects', category] as const,
}

type InitialData = InfiniteData<ProjectsResponseDto, number>

export const useProjectsQuery = (category: string, initialData?: InitialData) =>
  useInfiniteQuery({
    queryKey: projectKeys.infinite(category),
    queryFn: ({ pageParam }) => projectsApi.getProjects({ category, cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (last) => last.nextCursor ?? undefined,
    initialData,
    staleTime: initialData ? 30_000 : 0,
  })
