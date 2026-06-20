"use client"

import { CertificateIcon, TagIcon } from "@phosphor-icons/react"

const CertificationsCardPage = ({
  title,
  desc,
  category,
  index,
}: {
  title: string
  desc: string
  category: string
  index: number
}) => {
  return (
    <div className='hover:border-primary border-2 border-transparent transition-all duration-500 cursor-pointer'>
      <div className="w-full h-[120px] bg-card flex items-center justify-center border-b border-muted/20">
        <CertificateIcon className='text-primary' weight='duotone' size={48} />
      </div>
      <div className="p-8 bg-card space-y-6">
        <div className="space-y-2">
          <h3 className='text-foreground text-lg font-semibold tracking-tight'>{title}</h3>
          <p className='text-muted-foreground text-sm'>{desc}</p>
        </div>
        <div className='flex items-center gap-x-2'>
          <TagIcon className='text-secondary' weight='duotone' size={16} />
          <p className='text-sm font-medium tracking-tighter'>{category}</p>
        </div>
      </div>
    </div>
  )
}

export default CertificationsCardPage
