import React from 'react'
import { Dictionary } from '@/lib/getDictionary'
import { globalStyles } from '@/styles/styles'
import ProductsCard from '../reusable/ProductsCard'

const Products = ({
  dict
} : {
  dict: Dictionary
}) => {

  const productsData = dict.products
  const products = productsData.productsData
  return (
    <div className={`${globalStyles.mainContainer}`}>
      <div className={`${globalStyles.innerContainer} space-y-16 grid grid-cols-1`}>
        {productsData.productsData.map((item, i) => {
          return (
            <ProductsCard desc={item.desc} index={i} key={i} value={item.title} crumb={item.brand} point={item.point} hardware={item.hardware}/>
          )
        })}
      </div>
    </div>
  )
}

export default Products
