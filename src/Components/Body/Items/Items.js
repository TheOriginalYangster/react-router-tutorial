import React, { useState } from 'react'

import Item from './Item/Item'

import './Items.scss'

const baseClass = `items`

const displayClass = `${baseClass}__card-display`

export default function Items(props) {

  const [items, setItems] = useState([])

  const { name } = props

  const handleSearch = (e) => {
    e.preventDefault()
    let text = e.target[0].value
    fetch(`https://api.magicthegathering.io/v1/cards?name=${text}`)
      .then(r => r.json())
      .then(res => setItems(res.cards))
  }

  return (
    <div className={baseClass}>
      <h2>This is the Items page, {name}!</h2>
      <h3>Search for a MTG card!</h3>
      <form onSubmit={handleSearch}>
        <input type="text" id="card-search" />
        <input type="submit"/>
      </form>
      <div className={displayClass}>
        {items.map(x => <Item name={x.name} url={x.imageUrl} set={x.setName} uid={x.multiverseid}/>)}
      </div>
    </div>
  )
}