import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

export default observer(function SearchProducts () {
  const RED = '#ff4136'

  return pug`
    View.root
      Text.title Search Products
      View.search
        TextInput.textInput(placeholder='Search..')
        TouchableOpacity.searchButton
          FontAwesomeIcon.icon(icon=faSearch color=RED size=18)
  `
})
