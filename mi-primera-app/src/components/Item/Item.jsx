
const Item = ({product}) => {
  return (
    <div className="card">
        <img src={product.image} className="img-prod"/>
        <h1 className="p-prod">{product.name}</h1>
        <p className="p-prod">${product.price}</p>
        <button className="btn-detail">VER MAS</button>
    </div>
  )
}
export default Item