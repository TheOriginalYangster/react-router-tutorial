import './Item.scss'

const Item = ({ name, url, set, uid }) => {

  if(!url) return null

  return (
    <div className='card'>
      <img src={url} width="200px"/>
      <p>{name}</p>
      <p>{set}</p>
    </div>
  )
}



export default Item