"use client"

import { SealCheckIcon } from '@phosphor-icons/react'
import Image from 'next/image'

const ImageCard = ({
  title,
  desc,
  className,
  src,
  type
} : {
  title: string,
  desc: string,
  className?: string,
  src?: string,
  type?: string
}) => {
  return (
    <div className='bg-card relative overflow-hidden'>
      <div className='w-8 h-8 bg-background absolute bottom-0 right-0'/>
      <div className='relative w-full h-[250px] bg-neutral-400'>
        {src && <Image src={src} fill className='object-cover' alt={title} />}
      </div>
      <div className='p-8 space-y-4'>
        <div>
          <div className='flex items-center gap-x-1'>
            <h3 className='text-foreground text-lg font-semibold'>{title}</h3>
            <SealCheckIcon weight='duotone' className='text-secondary mt-0.5' size={16}/>
          </div>
          <p className='text-muted text-sm'>{type}</p>
        </div>
        <p className='text-foreground'>{desc}</p>
      </div>
    </div>
  )
}

export default ImageCard