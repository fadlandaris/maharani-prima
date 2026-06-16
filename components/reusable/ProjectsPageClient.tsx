"use client"

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { Dictionary } from '@/lib/getDictionary'
import ProjectsFilter from './ProjectsFilter'
import ProjectsCards from './ProjectCardPage'
import { SpinnerGapIcon } from '@phosphor-icons/react'
import { useProjectsQuery } from '@/services/projects/projects.queries'
import type { ProjectsResponseDto } from '@/services/projects/project.dto'

type Project = Dictionary['Projects']['projetsData'][number]

type Props = {
  categories: string[]
  initialItems: Project[]
  initialNextCursor: number | null
}

const ProjectsPageClient = ({ categories, initialItems, initialNextCursor }: Props) => {
  const [active, setActive] = useState('All')
  const sentinelRef         = useRef<HTMLDivElement>(null)

  const initialData: { pages: ProjectsResponseDto[]; pageParams: number[] } = {
    pages: [{ data: initialItems, nextCursor: initialNextCursor, total: initialItems.length }],
    pageParams: [0],
  }

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } = useProjectsQuery(
    active,
    active === 'All' ? initialData : undefined
  )

  const items = data?.pages.flatMap((p) => p.data) ?? initialItems

  useEffect(() => {
    const el = sentinelRef.current
    if (!el || !hasNextPage) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      { rootMargin: '300px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <>
      <ProjectsFilter data={categories} active={active} onChange={setActive} />

      <div className='grid grid-cols-3 gap-4'>
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.div
              key={`${item.project}-${item.year}`}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: i < 10 ? (i % 3) * 0.07 : 0 }}
            >
              <ProjectsCards
                project={item.project}
                client={item.client}
                owner={item.owner}
                year={item.year}
                scope={item.scope}
                category={item.category}
                index={i}
              />
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
          {items.length} projects loaded 👍
        </p>
      )}
    </>
  )
}

export default ProjectsPageClient
