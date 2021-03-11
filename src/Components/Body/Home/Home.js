import React from 'react'

import './Home.scss'

const gamePic = 'https://img.tpt.cloud/rewire/uploads/2018/01/Gamers-Dice-Dojo_resize.inside.1000x667.jpg'

const baseClass = `home`

export default function Home(props) {

  const { name } = props
  return (
    <div className={baseClass}>
      <h1>Welcome to the LGS website!</h1>
      <h3>You should come by sometime, {name}!</h3>
      <img src={gamePic} />
    </div>
  )
}