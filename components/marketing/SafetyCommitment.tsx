"use client"

import { Dictionary } from '@/lib/getDictionary'
import { globalStyles } from '@/styles/styles'
import Title from '../reusable/Title'
import { GavelIcon } from '@phosphor-icons/react'

const SafetyCommitment = ({
  dict
} : {
  dict: Dictionary
}) => {

  const safetyData = dict.safetyCommitment
  return (
    <div className={`${globalStyles.mainContainer}`}>
      <div className={`${globalStyles.innerContainer} space-y-16`}>
        <Title value={safetyData.titles} crumb={safetyData.crumb} />
        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-neutral-400'>

          </div>
          <div className='col-span-2 grid grid-cols-1 gap-4'>
            <div className='grid grid-cols-2 gap-4'>
              {safetyData.safetyData.slice(1, 3).map((item, i) => {
                return (
                  <div key={i} className={`p-8 border-muted/20 space-y-8 bg-card`}>
                    <div className='p-4 bg-primary/5 w-fit'>
                      <GavelIcon weight='duotone' size={32} className='text-primary' />
                    </div>
                    <div className='space-y-2'>
                      <h4 className='text-foreground text-lg font-semibold'>{item.title}</h4>
                      <p className='text-foreground'>{item.desc}</p>
                    </div>
                  </div> 
                )
              })}
            </div>
            {safetyData.safetyData.slice(0, 1).map((item, i) => {
              return (
                <div key={i} className={`p-8 border-muted/20 space-y-8 bg-card`}>
                  <div className='p-4 bg-primary/5 w-fit'>
                    <GavelIcon weight='duotone' size={32} className='text-primary' />
                  </div>
                  <div className='space-y-2'>
                    <h4 className='text-foreground text-lg font-semibold'>{item.title}</h4>
                    <p className='text-foreground'>{item.desc}</p>
                  </div>
                </div> 
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SafetyCommitment


