import { Dictionary } from '@/lib/getDictionary'
import { globalStyles } from '@/styles/styles'
import Button from './Button'
import { Globe } from "@/components/ui/globe"

const Cta = ({
  dict
} : {
  dict: Dictionary
}) => {

  const ctaData = dict.Cta

  return (
    <div className={`${globalStyles.mainContainer} overflow-hidden bg-neutral-400 h-screen relative`}>
      <Globe/>
      <div className={`${globalStyles.innerContainer} text-background h-full flex items-start justify-center`}>
        <div className='text-center space-y-12'>
          <h3 className='text-4xl tracking-tighter font-semibold max-w-2xl'>{ctaData.title}</h3>
          <Button value={ctaData.cta} className='mx-auto' />
        </div>
      </div>
    </div>
  )
}

export default Cta