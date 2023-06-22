import { useEffect, useState } from "react"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"
import { NavCategory } from "./NavCategory"
import { Loader } from "./Loader"
import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../firebase/config"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    /* const [isLoading, setIsLoading] = useState (false) */
    const category = useParams().category
    useEffect(() => {
        /* setIsLoading(true) */
        const productsRef = collection(db, "hamburguesas")
        const q = query(productsRef, where("category", "==", category))

        getDocs(q)
            .then((resp) => {
                setProducts(resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                } ));
            })
    }, [category])
    
    return (
        <div>
            <NavCategory/>
            {/* {isLoading && <Loader/>} */}
            <ItemList products={products}/>
        </div>
    )
}