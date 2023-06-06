import { useEffect, useState } from "react"
import { requestItemId } from "../../helpers/data"
import ItemDetail from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = ( {itemId} ) => {
    const [item, setItem] = useState(null)
    useEffect(() => {
        requestItemId(itemId)
            .then((res) => {
                setItem(res)
            })
    }, [itemId])
  return (
    <div>  
        {item && <ItemDetail item={item}/>}
    </div>
  )
}
