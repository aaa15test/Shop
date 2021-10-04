import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div } from '@startupjs/ui'

export default observer(function ({ children }) {
  return pug`
    Div.body= children
  `
})
