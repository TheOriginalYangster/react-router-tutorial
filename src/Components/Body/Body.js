import React from 'react'

import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Items from './Items/Items'
import Card from './Card/Card'

function Body (props) {

  const { name } = props

  return (<Home name={name} />)
}

export default Body