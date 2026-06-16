"use client"

import { Dictionary } from '@/lib/getDictionary'
import { globalStyles } from '@/styles/styles'
import Crumb from '../reusable/Crumb'
import Button from '../reusable/Button'
import Marquee from '@/animations/Marquee'
import Image from 'next/image'

const ProductsHero = ({
  dict
} : {
  dict: Dictionary
}) => {

  const productsData = dict.products
  return (
    <div className={`${globalStyles.fullContainer} pt-32`}>
      <div className={`${globalStyles.innerContainer} space-y-16 w-full `}>
        <div className='space-y-8'>
          <Crumb value={productsData.crumb}/>
          <h2 className='text-6xl font-semibold tracking-tighter max-w-2xl'>{productsData.title}</h2>
          <Button value={productsData.certifications}/>
        </div>
         <Marquee>
          {productsData.productsData.map((item, i) => {
            return (
              <Image className={`bg-neutral-400 ${i % 2 === 0 ? "rounded-l-full" : ""}`} key={i} alt={item.title} width={i % 2 === 0 ? 500 : 600} height={400} src={'/test'}/>
            )
          })}
        </Marquee>
      </div>
    </div>
  )
}

export default ProductsHero
