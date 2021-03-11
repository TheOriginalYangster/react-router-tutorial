import React, { useState } from 'react'

import './Header.scss'

const baseClass = `header`
const linkClass = `${baseClass}__nav-link`


function Header(props) {

  return(
    <div className={baseClass}>
        <span className={linkClass}>Home</span>
        <span className={linkClass}>About</span>
        <span className={linkClass}>Contact</span>
        <span className={linkClass}>Items</span>
    </div>
  )
}

export default Header