import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Item, List } from "./Caterogies.styled"


export const Categories = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        try {
            const fetchCategory = async () => {
                const {data} = await axios.get(`http://localhost:8080/shop/category`)
                // console.log(data, 'data')
                setCategory(data)
            }
            fetchCategory()
        } catch (error) {
            
        }
    }, [])
    if(category === undefined){
        return;
    }
    return (
        <>
        <List>
            {
            category.map(el => (
                <Item key={el.id}>
                    <Link to={`/categories/${el.id}`}>
                    <p>{el.name}</p>
                    </Link>
                </Item>
            ))
            }
        </List>
        </>
    )
}