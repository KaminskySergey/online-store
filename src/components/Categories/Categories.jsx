import axios from "axios"
import { useEffect } from "react"
import { Item, List } from "./Caterogies.styled"


export const Categories = () => {

    useEffect(() => {
        try {
            const fetchCategory = async () => {
                const {data} = await axios.get(`http://localhost:8080/category`)
                console.log(data, 'data')
            }
            fetchCategory()
        } catch (error) {
            
        }
    }, [])
    return (<List>
        <Item>Крупная бытовая техника</Item>
        <Item>Мелкая бытовая техника</Item>
        <Item>Смартфоны</Item>
        <Item>Ноутбуки</Item>
        <Item>Товары для дома</Item>
        <Item>Автотовары</Item>
        <Item>Детские товары</Item>
        <Item>Алкоголь</Item>
        <Item>Наркотики</Item>
        <Item>Не заходи сюда</Item>
    </List>)
}