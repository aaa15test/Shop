import React from 'react'
import { observer } from 'startupjs'
import { View, Text } from 'react-native'
import './index.styl'

export default observer(function Categories () {
  const categories = [
    {
      title: 'Accessories',
      value: 4
    },
    {
      title: 'Book',
      value: 9
    },
    {
      title: 'Clothing',
      value: 5
    },
    {
      title: 'Homelife',
      value: 3
    },
    {
      title: 'Kids & Baby',
      value: 4
    }
  ]

  return pug`
    View.root
      Text.title Categories
      View.categories
        each item, index in categories
          View.category(key=index styleName=index === categories.length-1 ? 'last' : '')
            Text.categoryText= item.title
            Text.categoryText= item.value
  `
})
