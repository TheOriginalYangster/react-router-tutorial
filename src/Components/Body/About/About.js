import React from 'react'

import './About.scss'

const baseClass = `about`

export default function About(props) {

  const { name } = props
  return (
    <div className={baseClass}>
      <h2>This is the About page, {name}!</h2>
      <p>We're a humble shop that's been open since 2012.  We specialize in Magic, The Gathering cards as well as vintage Pokemon cards!</p>
    </div>
  )
}