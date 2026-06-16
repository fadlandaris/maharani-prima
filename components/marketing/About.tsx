"use client"

import { Dictionary } from '@/lib/getDictionary'
import { globalStyles } from '@/styles/styles'
import Crumb from '../reusable/Crumb'
import { CalendarCheckIcon, HandCoinsIcon, SealCheckIcon, FirstAidKitIcon } from '@phosphor-icons/react'

const About = ({
  dict,
} : {
  dict: Dictionary
}) => {

  const aboutData = dict.about
  return (
    <div className={`${globalStyles.mainContainer}`}>
      <div className={`${globalStyles.innerContainer} grid grid-cols-3`}>
        <div>
          <Crumb value={dict.about.label}/>
        </div>
        <div className='col-span-2 space-y-12'>
          <div className='grid grid-cols-2 text-xl font-medium gap-x-12'>
            {aboutData.description.map((item, i) => {
              return (
                <p key={i} className='text-foreground text-xl tracking-tight'>
                  {item}
                </p>
              )
            })}
          </div>
          <div className='grid grid-cols-4 gap-x-12'>
            {aboutData.stats.map((item, i) => {
              const colors = [
                "text-primary",
                "text-secondary",
                "text-tertiary",
                "text-primary"
              ]
              const icon = [
                CalendarCheckIcon,
                HandCoinsIcon,
                SealCheckIcon,
                FirstAidKitIcon
              ]
              const Icon = icon[i];
              return (
                <div key={i} className='border-t border-muted/30 pt-12 space-y-8 text-foreground'>
                  <Icon size={32} weight='duotone' className={colors[i]} />
                  <div className='space-y-1 font-medium'>
                    <p className='text-foreground text-lg font-semibold'>{item.title}</p>
                    <p className='text-foreground'>{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className=' h-[500px] bg-neutral-400'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default About