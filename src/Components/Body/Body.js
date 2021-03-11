import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Items from './Items/Items'
import Card from './Card/Card'

function Body (props) {

  const { name } = props

  return (
    <Switch>
      <Route exact path="/card/:uid">
        <Card name={name} />
      </Route>
      <Route exact path="/about">
        <About name={name} />
      </Route>
      <Route exact path="/items">
        <Items name={name} />
      </Route>
      <Route exact path="/contact">
        <Contact name={name} />
      </Route>
      <Route exact path="/">
        <Home name={name} />
      </Route>
    </Switch>
  )
}

export default Body