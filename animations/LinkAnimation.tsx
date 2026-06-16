"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@phosphor-icons/react'

const LinkAnimation = ({
  href,
  value,
  variant,
  Icon = ArrowRightIcon,
  index,
} : {
  href: string,
  value: string,
  variant?: string,
  Icon?: React.ComponentType
  index: number
}) => {
  return (
    <Link href={href} className='flex border border-muted/20 group items-center justify-between gap-x-4 w-auto py-1 px-2 bg-card group'>
      <p className='font-medium'>{value}</p>
      <div className='relative overflow-hidden'>
        <p className='opacity-0 text-xs'>[ 0{index} ]</p>
        <p className={`absolute group-hover:-right-12 group-hover:opacity-0 opacity-100 transition-all duration-500 inset-0 text-center flex items-center justify-center text-xs`}>[ 0{index} ]</p>
        <Icon size={12} className={`absolute -left-12 -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover:left-1/2 group-hover:opacity-100 opacity-0 transition-all duration-500`}/>
      </div>
    </Link>
  )
}

export default LinkAnimation