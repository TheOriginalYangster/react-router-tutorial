import React from 'react'

import './Contact.scss'

const baseClass = `contact`

export default function Contact(props) {

  const { name } = props
  return (
    <div className={baseClass}>
      <h2>This is the Contact page, {name}!</h2>
      <p><b>Phone: </b>(361) 688-2967</p>
      <p><b>Address: </b>1357 Nicol Bolas Ave, Austin, TX 78777</p>
      <p><b>Email: </b>buyourcards@lgs.com</p>
    </div>
  )
}