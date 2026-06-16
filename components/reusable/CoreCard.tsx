"use client"

import Button from './Button'
import { SketchLogoIcon, LightningIcon, CellTowerIcon, BulldozerIcon, DropIcon } from '@phosphor-icons/react'

const CoreCard = ({
  title,
  desc,
  index,
  value
} : {
  title: string,
  desc: string
  index: number,
  value?: string
}) => {

  const iconMap = [
    SketchLogoIcon,
    BulldozerIcon,
    DropIcon,
    CellTowerIcon,
    LightningIcon,
  ]

  const Icon = iconMap[index]
  return (
    <div className='h-[400px] w-[500px] bg-card p-8 flex flex-col justify-between relative overflow-hidden'>
      <div className='absolute bottom-8 right-8'>
        <Icon weight='duotone' size={44} className='text-muted/20'/>
      </div>
      <p className='text-muted/30 text-3xl font-semibold'>[0{index + 1}]</p>
      <div className='space-y-4'>
        <h3 className='text-foreground text-lg font-semibold'>{title}</h3>
        <p className='text-foreground'>{desc}</p>
        <Button value={value}/>
      </div>
    </div>
  )
}

export default CoreCard