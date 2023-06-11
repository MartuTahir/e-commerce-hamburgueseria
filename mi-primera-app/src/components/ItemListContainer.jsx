import { useEffect, useState } from "react"
import { requestData } from "../helpers/data"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"
import { NavCategory } from "./NavCategory"
import { Loader } from "./Loader"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState (false)
    const category = useParams().category
    useEffect(() => {
        setIsLoading(true)
        requestData()
            .then((res) => {
                if(category){
                    setIsLoading (false)
                    setProducts(res.filter((prod) => prod.category === category))
                } else {
                    setIsLoading (false)
                    setProducts(res)
                }
            })
    }, [category])
    
    return (
        <div>
            <NavCategory/>
            {isLoading && <Loader/>}
            <ItemList products={products}/>
        </div>
    )
}