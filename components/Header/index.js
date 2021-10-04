import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

const GRAY = '#4b4a48'

export default observer(function Header () {
  const navigationIcons = [faSearch, faShoppingBag, faBars]
  const sections = ['HOME', 'ABOUT AS', 'SHOP', 'PAGES', 'BLOG', 'CONTACT']

  return pug`
    View.root
      Text.logo Neha
        Text.dot .
      View.sections
        each section in sections
          TouchableOpacity
            Text.section= section
      View.icons
        each icon, index in navigationIcons
          TouchableOpacity.icon(styleName=index > 0 ? 'marginLeft' : '')
            FontAwesomeIcon(icon=icon color=GRAY size=16)
  `
})
