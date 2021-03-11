import React from 'react'
import { withRouter } from 'react-router-dom'

import './Card.scss'

const baseClass = 'card'

class Card extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      card: null,
    }
  }

  componentDidMount(){
    const uid = this.props.match.params.uid
    fetch(`https://api.magicthegathering.io/v1/cards/${uid}`)
      .then(r => r.json())
      .then(r => this.setState({ card: r.card }))
  }

  render() {

    const { card } = this.state

    

    if(!card) return <img src="https://i.pinimg.com/originals/f5/a4/9b/f5a49bee120a71d8a00a273a5a315d04.gif" />
    else {

      const {
        name,
        setName,
        imageUrl,
        text,
        flavor,
        rulings
      } = card

      return (
        <div className={baseClass}>
          <div>
            <img src={imageUrl}/>
            <p>{name}</p>
            <p>{setName}</p>
            <p>{text}</p>
            <p>{flavor}</p>
            {rulings && rulings.length > 0 && (
              <>
              <br/>
              <p>Rulings</p>
              {rulings.map(x => <p>{x.date}: {x.text}</p>)}
              </>
            )}
          </div>
        </div>
      )
    }
  }
}

export default withRouter(Card)