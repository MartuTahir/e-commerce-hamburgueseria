
export const ItemCount = ({handleAdd, handleRest, quantity}) => {

  return (
    <div>
        <div className="item-count">
            <button className="btn-count" onClick={handleRest}> - </button>
            <p className="quantity-count">{quantity}</p>
            <button className="btn-count" onClick={handleAdd}> + </button>
        </div>
    </div>
  )
}
