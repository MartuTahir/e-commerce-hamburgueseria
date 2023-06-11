import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <div className="card">
        <img src={product.image} className="img-prod"/>
        <h1 className="p-prod">{product.name}</h1>
        <p className="p-prod">${product.price}</p>
        <Link to={`/item/${product.id}`} className="btn-detail">VER MAS</Link>
    </div>
  )
}
export default Item