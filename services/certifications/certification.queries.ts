import { useInfiniteQuery, type InfiniteData } from '@tanstack/react-query'
import { certificationsApi } from './certification.api'
import type { CertificationsResponseDto } from './certification.dto'

export const certificationKeys = {
  infinite: (category: string) => ['certifications', category] as const,
}

type InitialData = InfiniteData<CertificationsResponseDto, number>

export const useCertificationsQuery = (category: string, initialData?: InitialData) =>
  useInfiniteQuery({
    queryKey: certificationKeys.infinite(category),
    queryFn: ({ pageParam }) => certificationsApi.getCertifications({ category, cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (last) => last.nextCursor ?? undefined,
    initialData,
    staleTime: initialData ? 30_000 : 0,
  })
