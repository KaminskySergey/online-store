import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

const CategoriesPage = () => {
    const [idCategory, setIdCategory] = useState([])
    // const {categoryId} = useParams()
    // console.log(categoryId)
    useEffect(() => {
        try {
            const fetchCategoriesList = async () => {
                const {data} = await axios.get(`http://localhost:8080/shop/category/`)
                // console.log(data)
                setIdCategory(data)
                
            }
            fetchCategoriesList()
        } catch (error) {
            
        }
    }, [])

    console.log(idCategory)
    return (
        <>
        
        </>
    )
}

export default CategoriesPage;