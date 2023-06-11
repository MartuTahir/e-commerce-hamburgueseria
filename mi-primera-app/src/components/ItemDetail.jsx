
const ItemDetail = ({item}) => {
  return (
    <div>
        <div className="detail">
            <img src={item.image} className="img-detail"/>
            <div className="container-detail">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p className="p-detail">${item.price}</p>
                <button className="add-cart">AGREGAR AL CARRITO</button>
            </div>
        </div>
    </div>
  )
}
export default ItemDetail
