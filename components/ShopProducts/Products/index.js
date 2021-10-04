import React from 'react'
import { observer } from 'startupjs'
import { View, Text, Image } from 'react-native'
import { BASE_URL } from '@env'
import './index.styl'

export default observer(function Products () {
  const products = [
    {
      name: 'WOODEN FURNITURE',
      image: 'product1.jpg',
      price: '110.00',
      type: 'Electronic',
      sale: true
    },
    {
      name: 'WOODEN FURNITURE',
      image: 'product2.jpg',
      price: '110.00',
      type: 'Electronic'
    },
    {
      name: 'WOODEN FURNITURE',
      image: 'product3.jpg',
      price: '110.00',
      type: 'Electronic',
      sale: true
    },
    {
      name: 'WOODEN FURNITURE',
      image: 'product4.jpg',
      price: '110.00',
      type: 'Electronic'
    },
    {
      name: 'WOODEN FURNITURE',
      image: 'product5.jpg',
      price: '110.00',
      type: 'Electronic',
      sale: true
    },
    {
      name: 'WOODEN FURNITURE',
      image: 'product6.jpg',
      price: '110.00',
      type: 'Electronic'
    },
    {
      name: 'WOODEN FURNITURE',
      image: 'product7.jpg',
      price: '110.00',
      type: 'Electronic',
      sale: true
    },
    {
      name: 'WOODEN FURNITURE',
      image: 'product8.jpg',
      price: '110.00',
      type: 'Electronic'
    },
    {
      name: 'WOODEN FURNITURE',
      image: 'product9.jpg',
      price: '110.00',
      type: 'Electronic',
      sale: true
    },
    {
      name: 'WOODEN FURNITURE',
      image: 'product10.jpg',
      price: '110.00',
      type: 'Electronic'
    },
    {
      name: 'WOODEN FURNITURE',
      image: 'product11.jpg',
      price: '110.00',
      type: 'Electronic',
      sale: true
    },
    {
      name: 'WOODEN FURNITURE',
      image: 'product12.jpg',
      price: '110.00',
      type: 'Electronic'
    }
  ]
  const base = BASE_URL

  return pug`
    View.root
      each product, index in products
        View.product(
          key=index
          styleName=[
            index === 0 ? 'first' : '', index < 2 ? 'noMarginTablet' : '', index < 4 ? 'noMarginWide' : ''
          ]
        )
          Image.productImage(source={ uri: base + '/img/shopProducts/' + product.image })
          if product.sale
            View.sale
              Text.saleText SALE
          View.productInfo
            Text.name= product.name
            Text.price= '$' + product.price
          Text.type= product.type
  `
})
