"use client"

import { useRef } from 'react'
import { globalStyles } from '@/styles/styles'
import { Dictionary } from '@/lib/getDictionary'
import Title from '../reusable/Title'
import Button from '../reusable/Button'
import { GaugeIcon, PowerIcon, CellTowerIcon, PipeIcon } from '@phosphor-icons/react'
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import ProjectsCard from '../reusable/ProjectsCard'

type ProjectItem = {
  project: string
  client: string
  owner: string
  year: string
  scope: string
  category: string
}

const StickyCard = ({
  item, index, total, cta, scrollYProgress,
}: {
  item: ProjectItem
  index: number
  total: number
  cta?: string
  scrollYProgress: MotionValue<number>
}) => {
  const isLast = index === total - 1
  const scale = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    [1, isLast ? 1 : 0.9]
  )

  return (
    <motion.div
      className='sticky top-28'
      style={{ zIndex: index + 1, scale, transformOrigin: 'top center' }}
    >
      <ProjectsCard
        project={item.project}
        client={item.client}
        owner={item.owner}
        year={item.year}
        scope={item.scope}
        category={item.category}
        index={index}
        cta={cta}
      />
    </motion.div>
  )
}

const Projects = ({
  dict
}: {
  dict: Dictionary
}) => {
  const projectsData = dict.Projects
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  return (
    <div className={`${globalStyles.mainContainer} bg-neutral-400`}>
      <div className={`${globalStyles.innerContainer} space-y-16`}>
        <div className='flex items-end justify-between'>
          <Title variant='background' value={projectsData.title} crumb={projectsData.crumb} crumbVariant='background' />
          <Button variant="primary" value={projectsData.certifications} />
        </div>
        <div className='grid grid-cols-4 bg-card'>
          {projectsData.projectsStat.map((item, i) => {
            const iconMap = [PowerIcon, GaugeIcon, CellTowerIcon, PipeIcon]
            const Icon = iconMap[i % iconMap.length]
            return (
              <div key={i} className={`${i === projectsData.projectsStat.length - 1 ? '' : 'border-r-1'} p-8 border-muted/20 space-y-8`}>
                <Icon weight='duotone' size={32} className='text-primary' />
                <div className='space-y-2'>
                  <h4 className='text-foreground text-lg font-semibold'>{item.title}</h4>
                  <p className='text-foreground'>{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div ref={containerRef} className='grid-cols-1 grid'>
          {projectsData.projetsData.slice(0, 6).map((item, i) => (
            <StickyCard
              key={i}
              item={item}
              index={i}
              total={6}
              cta={projectsData.cta}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
