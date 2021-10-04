import React from 'react'
import { observer } from 'startupjs'
import { View, Text } from 'react-native'
import './index.styl'

export default observer(function Size () {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  return pug`
    View.root
      Text.title Size
      View.sizes
        each size, index in sizes
          Text.size(styleName=index === 0 ? 'first' : '')= size
  `
})
