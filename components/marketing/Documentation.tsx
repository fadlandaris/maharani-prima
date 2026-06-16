"use client"

import { Dictionary } from '@/lib/getDictionary'
import { globalStyles } from '@/styles/styles'
import Title from '../reusable/Title'
import Button from '../reusable/Button'
import VerticalMarquee from '@/animations/VerticalMarquee'

const Documentation = ({
  dict
} : {
  dict: Dictionary
}) => {

  const documentationData = dict.documentation
  return (
    <div className={`${globalStyles.mainContainer}`}>
      <div className={`${globalStyles.innerContainer} space-y-16`}>
        <div className='flex items-end justify-between'>
          <Title value={documentationData.title} crumb={documentationData.crumb}/>
          <Button variant="primary" value={documentationData.certifications}/>
        </div>
        <div className='grid grid-cols-4 gap-4 h-[800px] overflow-hidden relative'>
          <VerticalMarquee offset={0}>
            <div className='w-full bg-neutral-400 h-[300px]'/>
          </VerticalMarquee>
          <VerticalMarquee reverse offset={0.35}>
            <div className='w-full bg-neutral-400 h-[300px]'/>
          </VerticalMarquee>
          <VerticalMarquee offset={0.6}>
            <div className='w-full bg-neutral-400 h-[300px]'/>
          </VerticalMarquee>
          <VerticalMarquee reverse offset={0.2}>
            <div className='w-full bg-neutral-400 h-[300px]'/>
          </VerticalMarquee>
        </div>
      </div>
    </div>
  )
}

export default Documentation