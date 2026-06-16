"use client"

import React from 'react'
import Button from './Button'
import { GaugeIcon, PowerIcon, CellTowerIcon, PipeIcon, HandSoapIcon, ShovelIcon } from '@phosphor-icons/react'

const Card = ({
  title,
  desc,
  className,
  index,
  value
} : {
  title: string,
  desc: string,
  className?: string,
  index: number,
  value?: string
}) => {

  const iconMap = [
    PowerIcon,
    GaugeIcon,
    CellTowerIcon,
    PipeIcon,
    HandSoapIcon,
    ShovelIcon,
  ]

  const Icon = iconMap[index % iconMap.length]

  return (
    <div className='bg-card p-8 w-full h-[350px] flex flex-col justify-between relative overflow-hidden'>
      <div className='w-12 h-12 bg-background absolute bottom-2 right-2'/>
      <div className='w-8 h-8 bg-background absolute bottom-16 right-2'/>
      <div className='w-8 h-8 bg-background absolute bottom-2 right-16'/>
      <div className='p-4 bg-primary/5 w-fit'>
        <Icon weight='duotone' size={32} className='text-primary'/>
      </div>
      <div className="space-y-4">
        <h3 className='text-foreground text-lg font-semibold'>{title}</h3>
        <p className='text-foreground'>{desc}</p>
        <Button value={value}/>
      </div>
    </div>
  )
}

export default Card