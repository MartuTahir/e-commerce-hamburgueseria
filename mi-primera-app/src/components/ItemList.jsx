import Item from "./Item"

export const ItemList = ({products}) => {
  return (
    <div>
        <div className="container">
            {products.map((prod) => <Item product={prod} key={prod.id}/>)}
        </div>
    </div>
  )
}
