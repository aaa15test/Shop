import React from 'react'
import { observer } from 'startupjs'
import { View } from 'react-native'
import { LeftFilters, ShopProducts } from 'components'
import './index.styl'

export default observer(function Content () {
  return pug`
    View.root
      LeftFilters
      ShopProducts
  `
})
