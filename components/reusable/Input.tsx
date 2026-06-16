"use client"

import React from 'react'
import { EnvelopeIcon } from '@phosphor-icons/react'

const Input = ({
  title,
  className,
  index,
  value,
  Icon = EnvelopeIcon
} : {
  title: string,
  className?: string,
  index: number,
  value?: string,
  Icon?: React.ComponentType,
}) => {
  return (
    <form className='relative'>
      <input placeholder='example@email.com' type='email' className='w-90 p-4 pl-12 bg-card'/>
      <Icon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" weight="duotone"/>
    </form>
  )
}

export default Input