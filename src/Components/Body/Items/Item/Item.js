import './Item.scss'
import { NavLink } from 'react-router-dom'

const Item = ({ name, url, set, uid}) => {

  if(!url) return null

  return (
    <div className='card'>
      <NavLink to={`/card/${uid}`}>
        <img src={url} width="200px"/>
      </NavLink>
      <p>{name}</p>
      <p>{set}</p>
    </div>
  )
}



export default Item