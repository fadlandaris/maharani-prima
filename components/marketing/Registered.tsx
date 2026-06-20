"use client"

import Title from '@/components/reusable/Title'
import { Dictionary } from '@/lib/getDictionary'
import { globalStyles } from '@/styles/styles'
import { MapPinAreaIcon } from '@phosphor-icons/react'

const Registered = ({
  dict
} : {
  dict: Dictionary
}) => {

  const registeredData = dict.registered
  return (
    <div className={`${globalStyles.mainContainer}`}>
      <div className={`${globalStyles.innerContainer} gap-x-16 space-y-16 grid grid-cols-2`}>
        <div className=''>
          <div className='sticky top-32'>
            <Title value={registeredData.title} crumb={registeredData.crumb} />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4'>
          {registeredData.vendors.map((item, i) => {
            return (
              <div key={i} className='p-8 bg-card flex items-center gap-x-4 relative overflow-hidden'>
                <MapPinAreaIcon weight='duotone' size={24} className='text-primary' />
                <p className='tracking-tighter font-medium text-lg'>{item.title}</p>
                <div className='w-62 h-62 bg-background absolute -right-62 -bottom-20 rotate-45'/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Registered