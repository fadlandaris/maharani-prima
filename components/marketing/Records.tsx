import { globalStyles } from '@/styles/styles'
import { Dictionary } from '@/lib/getDictionary'
import Title from '../reusable/Title'
import Card from '../reusable/Card'

const Records = ({
  dict
} : {
  dict: Dictionary
}) => {
  const recordsData = dict.records
  const items = recordsData.recordsData

  return (
    <div className={`${globalStyles.mainContainer}`}>
      <div className={`${globalStyles.innerContainer} space-y-16`}>
        <Title value={recordsData.title} crumb={recordsData.crumb}/>
        <div className='grid grid-cols-2 gap-4'>
          {items.map((item, i) => (
            <Card key={i} value={recordsData.cta} index={i} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Records
