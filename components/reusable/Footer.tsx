"use client"

import { Dictionary } from '@/lib/getDictionary'
import { globalStyles } from '@/styles/styles'
import Input from './Input'
import Crumb from './Crumb'
import Button from './Button'

const Footer = ({
  dict
} : {
  dict: Dictionary
}) => {

  const footerData = dict.footer
  return (
    <footer className={`${globalStyles.mainContainer} h-screen relative`}>
      <div className='absolute bottom-0 left-0 right-0 h-[350px]' style={{ backgroundImage: "url('/footer.png')", backgroundSize: 'cover', backgroundPosition: 'top' }}/>
      <div className={`${globalStyles.innerContainer} w-full h-full relative grid grid-cols-2`}>
        <div className='space-y-8'>
          <Crumb value={footerData.label}/>
          <div className='space-y-4'>
            <p className='text-foreground'>{footerData.title}</p>
            <Input title={''} index={0}/>
            <p className=''>{footerData.desc}</p>
            <Button value={footerData.cta} />
          </div>
        </div>
        <div className='border'>
          test
        </div>
      </div>
    </footer>
  )
}

export default Footer