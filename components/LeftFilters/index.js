import React from 'react'
import { observer } from 'startupjs'
import { View } from 'react-native'
import SearchProducts from './SearchProducts'
import PriceFilter from './PriceFilter'
import Categories from './Categories'
import Size from './Size'
import Color from './Color'
import TopRatedIndex from './TopRatedProducts'
import './index.styl'

export default observer(function LeftFilter () {
  return pug`
    View.root
      SearchProducts
      PriceFilter
      Categories
      Color
      Size
      TopRatedIndex
  `
})
