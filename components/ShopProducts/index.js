import React from 'react'
import { observer } from 'startupjs'
import { View } from 'react-native'
import ProductsFilter from './ProductsFilter'
import Products from './Products'
import './index.styl'

export default observer(function ShopProducts () {
  return pug`
    View.root
      ProductsFilter
      Products
  `
})
