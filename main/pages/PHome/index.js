import React from 'react'
import { observer } from 'startupjs'
import { ScrollView } from 'react-native'
import { Header, Title, Content, Footer } from 'components'

export default observer(function PHome () {
  return pug`
    ScrollView
      Header
      Title
      Content
      Footer
  `
})
