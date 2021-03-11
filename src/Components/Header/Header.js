import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './Header.scss'

const baseClass = `header`
const linkClass = `${baseClass}__nav-link`




function Header(props) {

  return(
    <div className={baseClass}>
      <NavLink className={linkClass} to="/">Home</NavLink>
      <NavLink className={linkClass} to="/about">About</NavLink>
      <NavLink className={linkClass} to="/contact">Contact</NavLink>
      <NavLink className={linkClass} to="/items">Items</NavLink>
    </div>
  )
}

export default Header