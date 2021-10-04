import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown, faTh, faBars } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

const GRAY = '#6c6c6c'
const RED = '#ff4136'

export default observer(function ProductsFilter () {
  return pug`
    View.root
      View.sortProducts
        View.found
          Text.foundText
            Text.foundTextRed 23 
            | Product Found of 
            Text.foundTextRed 50
        View.sort
          Text.foundText Sort By:
          TouchableOpacity.selectSort
            Text.default Default
            FontAwesomeIcon.iconSelect(icon=faChevronDown color=GRAY size=16)
      View.tabList
        TouchableOpacity
          FontAwesomeIcon(icon=faTh color=RED size=22)
        TouchableOpacity.iconBars
          FontAwesomeIcon(icon=faBars color=GRAY size=22)
  `
})
