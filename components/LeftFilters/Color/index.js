import React from 'react'
import { observer } from 'startupjs'
import { View, Text } from 'react-native'
import './index.styl'

export default observer(function Color () {
  const colorsCount = 6

  return pug`
    View.root
      Text.title Color
      View.colors
        - let index = 0
        while index < colorsCount
          View.color(key=index styleName=index)
          - index ++
  `
})
