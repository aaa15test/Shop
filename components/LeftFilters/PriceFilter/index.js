import React from 'react'
import { observer } from 'startupjs'
import { View, Text } from 'react-native'
import './index.styl'

export default observer(function PriceFilter () {
  return pug`
    View.root
      Text.title Filter by Price
      View.slider
      View.price
        Text.priceText Price : $20 - $100
        Text.priceText Filter
  `
})
