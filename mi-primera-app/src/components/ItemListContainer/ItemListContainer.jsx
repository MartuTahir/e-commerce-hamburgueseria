import { useEffect, useState } from "react"
import { requestData } from "../../helpers/data"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        requestData()
            .then((res) => {
                setProducts(res)
            })
    }, [])
    
    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
}