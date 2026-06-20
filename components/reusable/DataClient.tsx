"use client"

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { SpinnerGapIcon } from '@phosphor-icons/react'
import { http } from '@/lib/api'
import Filter from './Filter'
import ProjectsCard from './ProjectCardPage'
import CertificationsCard from './CertificationsCardPage'

type PageDto = { data: any[]; nextCursor: number | null; total: number }

const CARD_MAP = {
  projects: (item: any, i: number) => (
    <ProjectsCard
      project={item.project}
      client={item.client}
      owner={item.owner}
      year={item.year}
      scope={item.scope}
      category={item.category}
      index={i}
    />
  ),
  certifications: (item: any, i: number) => (
    <CertificationsCard
      title={item.title}
      desc={item.desc}
      category={item.category}
      index={i}
    />
  ),
}

const KEY_MAP = {
  projects:       (item: any) => `${item.project}-${item.year}`,
  certifications: (item: any) => `${item.title}-${item.category}`,
}

type Endpoint = keyof typeof CARD_MAP

type Props = {
  categories: string[]
  initialItems: any[]
  initialNextCursor: number | null
  endpoint: Endpoint
}

const DataClient = ({ categories, initialItems, initialNextCursor, endpoint }: Props) => {
  const [active, setActive] = useState('All')
  const sentinelRef         = useRef<HTMLDivElement>(null)

  const initialData = {
    pages:      [{ data: initialItems, nextCursor: initialNextCursor, total: initialItems.length }],
    pageParams: [0],
  }

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } = useInfiniteQuery({
    queryKey:        [endpoint, active],
    queryFn:         async ({ pageParam }) => {
      const res = await http.get<PageDto>(endpoint, { params: { category: active, cursor: pageParam } })
      return res.data
    },
    initialPageParam: 0,
    getNextPageParam: (last) => last.nextCursor ?? undefined,
    initialData:      active === 'All' ? initialData : undefined,
    staleTime:        active === 'All' ? 30_000 : 0,
  })

  const items     = data?.pages.flatMap((p) => p.data) ?? initialItems
  const renderCard = CARD_MAP[endpoint]
  const getKey     = KEY_MAP[endpoint]

  useEffect(() => {
    const el = sentinelRef.current
    if (!el || !hasNextPage) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetchingNextPage) fetchNextPage()
      },
      { rootMargin: '300px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <>
      <Filter data={categories} active={active} onChange={setActive} />

      <div className='grid grid-cols-3 gap-4'>
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.div
              key={getKey(item)}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: i < 10 ? (i % 3) * 0.07 : 0 }}
            >
              {renderCard(item, i)}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div ref={sentinelRef} className='h-1' />

      {(isFetchingNextPage || isPending) && (
        <div className='flex justify-center'>
          <SpinnerGapIcon className='animate-spin text-primary' size={28} />
        </div>
      )}

      {!isFetchingNextPage && !hasNextPage && items.length > 0 && (
        <p className='text-center text-muted-foreground text-sm tracking-tighter font-medium text-lg'>
          {items.length} items loaded 👍
        </p>
      )}
    </>
  )
}

export default DataClient
