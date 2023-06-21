
export const ItemCount = ({quantity, handleAdd, handleRest}) => {
  return (
    <div>
        <div className="item-count">
            <button className="btn-count" onClick={handleRest}> - </button>
            <p>{quantity}</p>
            <button className="btn-count" onClick={handleAdd}> + </button>
        </div>
    </div>
  )
}
