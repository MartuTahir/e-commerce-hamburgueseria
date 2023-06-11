import { useEffect, useState } from "react"
import { requestItemId } from "../helpers/data"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const id = useParams().id
    useEffect(() => {
        requestItemId(Number(id))
            .then((res) => {
                setItem(res)
            })
    }, [id])
  return (
    <div>  
        {item && <ItemDetail item={item}/>}
    </div>
  )
}
