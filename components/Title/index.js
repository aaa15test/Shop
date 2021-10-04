import React from 'react'
import { observer } from 'startupjs'
import { View, Text, Image } from 'react-native'
import { BASE_URL } from '@env'
import './index.styl'

export default observer(function Title () {
  const base = BASE_URL

  return pug`
    View.root
      Image.logo(source={ uri: base + '/img/breadcrumb.jpg' })
      View.content
        Text.title Shop
        Text.description HOME   /   
          Text.descriptionShop SHOP
  `
})
