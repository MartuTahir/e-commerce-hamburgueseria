import Item from "../Item/Item"

export const ItemList = ({products}) => {
  return (
    <div>
        <h2 className="title-cat"> Todas Las Hamburguesas</h2>
        <div className="container">
            {products.map((prod) => <Item product={prod} key={prod.id}/>)}
        </div>
    </div>
  )
}
