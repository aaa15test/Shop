import React from 'react'
import { observer } from 'startupjs'
import { View, Text, Image } from 'react-native'
import { BASE_URL } from '@env'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import './index.styl'

const RED = '#ee3333'
const GRAY = '#6c6c6c'
const RATING_STARS_COUNT = 5

export default observer(function TopRatedIndex () {
  const products = [
    {
      name: 'Flying Drone',
      image: 'product1.jpg',
      rating: 2,
      cost: '140.00'
    },
    {
      name: 'Flying Drone',
      image: 'product2.jpg',
      rating: 1,
      cost: '140.00'
    },
    {
      name: 'Flying Drone',
      image: 'product3.jpg',
      rating: 4,
      cost: '140.00'
    },
    {
      name: 'Flying Drone',
      image: 'product4.jpg',
      rating: 3,
      cost: '140.00'
    }
  ]
  const base = BASE_URL

  return pug`
    View
      Text.title Top rated products
      View.products
        each product, index in products
          View.product(key=index styleName=index === 0 ? 'first' : '')
            Image.productImage(source={ uri: base + '/img/topProducts/' + product.image })
            View.productInfo
              Text.name=product.name
              View.rating
                - let i = 0
                while i < RATING_STARS_COUNT
                  FontAwesomeIcon.icon(
                    key=i
                    icon=i<product.rating ? fasFaStar : farFaStar
                    color=i<product.rating ? RED : GRAY
                    size=16
                    styleName=i === 0 ? 'first' : ''
                  )
                  - i++
              Text.cost= '$' + product.cost
  `
})
