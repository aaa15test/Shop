import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTwitter, faTumblr, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './index.styl'

const GRAY = '#4b4a48'

export default observer(function Footer () {
  const socialNetworkIcons = [faTwitter, faTumblr, faFacebookF, faInstagram]
  const headerSections = ['HOME', 'ABOUT AS', 'SHOP', 'BLOG', 'PAGES']
  const contacts = [
    {
      title: 'PHONE',
      value: '+012 345 678 102'
    },
    {
      title: 'EMAIL',
      value: 'info@example.com'
    },
    {
      title: 'ADDRESS',
      value: 'Dhaka Bangladesh'
    }
  ]

  return pug`
    View.root
      View.socialNetworks
        Text.experience 20 Years Experience
        View.socialNetworksIcons
          each icon, index in socialNetworkIcons
            TouchableOpacity.iconWrapper(key=index styleName=index === 0 ? 'first' : '')
              FontAwesomeIcon.icon(icon=icon color=GRAY size=14 styleName=index > 0 ? 'marginLeft' : '')
      View.logoHeader
        Text.logo Neha
          Text.dot .
        View.sections
          each section, index in headerSections
            Text.section(
              key=index
              styleName=index === 0 ? 'first' : index === headerSections.length-1 ? 'last' : ''
            )= section
        View.line
        Text.copyright Copyright © neha 2018 . All Right Reserved.
      View.contacts
        each contact, index in contacts
          Text.contact(styleName=index === contacts.length-1 ? 'last' : '')= contact.title + ': ' 
            Text.contactValue= contact.value
  `
})
