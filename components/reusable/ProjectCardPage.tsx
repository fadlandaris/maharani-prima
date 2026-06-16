"use client"

import Image from "next/image"
import { SealCheckIcon, CalendarCheckIcon, BulldozerIcon, BuildingIcon } from "@phosphor-icons/react"
import trimText from "@/lib/getTrimText"

const ProjectsCardPage = ({
  project,
  client,
  owner,
  year,
  scope,
  category,
  className,
  index,
  value,
  cta
} : {
  project: string,
  client: string,
  owner: string,
  year: string,
  scope: string,
  category: string,
  className?: string,
  index: number,
  value?: string,
  cta?:string
}) => {
  return (
    <div className='hover:border-primary border-2 border-transparent transition-all duration-500 cursor-pointer'>
      <div className="w-full h-[200px] relative bg-neutral-400">
        {/* placeholder until project images are available */}
      </div>
      <div className="p-8 bg-card space-y-8">
        <div className="space-y-2">
          <h3 className='text-foreground text-lg font-semibold'>{project}</h3>
          <div className='flex items-start gap-x-1'>
            <p>{trimText(client, 35)}</p>
            <SealCheckIcon weight='duotone' className='text-secondary mt-1.5' size={14}/>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className='flex items-center gap-x-4 pb-4 border-b border-muted/20'>
            <BulldozerIcon className='text-primary' weight='duotone' size={20}/>
            <p>{scope}</p>
          </div>
          <div className='flex items-center gap-x-4 py-4 border-b border-muted/20'>
            <BuildingIcon className='text-secondary' weight='duotone' size={20}/>
            <p>{owner}</p>
          </div>
          <div className='flex items-center gap-x-4 pt-4'>
            <CalendarCheckIcon className='text-tertiary' weight='duotone' size={20}/>
            <p>{year}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCardPage