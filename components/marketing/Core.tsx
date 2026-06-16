import React from 'react'
import { globalStyles } from '@/styles/styles'
import { Dictionary } from '@/lib/getDictionary'
import Title from '../reusable/Title'
import Marquee from '@/animations/Marquee'
import CoreCard from '../reusable/CoreCard'

const Core = ({
  dict
} : {
  dict: Dictionary
}) => {

  const coreData = dict.core

  return (
    <div className={`${globalStyles.mainContainer}`}>
      <div className={`${globalStyles.innerContainer} space-y-16`}>
        <Title value={coreData.title} crumb={dict.core.crumb}/>
        <Marquee>
          {coreData.coresData.map((item, i) => {
            return (
              <CoreCard value={coreData.cta} index={i} key={i} title={item.title} desc={item.desc} />
            )
          })}
        </Marquee>
      </div>
    </div>
  )
}

export default Core