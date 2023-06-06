
const ItemDetail = ({item}) => {
  return (
    <div>
        <div>
            <img src={item.image} />
            <div>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p>${item.price}</p>
            </div>
        </div>
    </div>
  )
}
export default ItemDetail
