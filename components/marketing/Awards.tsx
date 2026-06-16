import React from 'react'
import { Dictionary } from '@/lib/getDictionary'
import { globalStyles } from '@/styles/styles'
import Title from '../reusable/Title'
import ImageCard from '../reusable/ImageCard'
import Button from '../reusable/Button'

const Awards = ({
  dict
} : {
  dict: Dictionary
}) => {

  const awardsData = dict.awards
  const items = awardsData.awardsData

  return (
    <div className={`${globalStyles.mainContainer}`}>
      <div className={`${globalStyles.innerContainer} space-y-16`}>
        <div className='flex items-end justify-between'>
          <Title value={awardsData.title} crumb={awardsData.crumb}/>
          <Button value={awardsData.certifications}/>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {items.map((item, i) => (
            <ImageCard type={item.type} key={i} value={awardsData.cta} index={i} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Awards