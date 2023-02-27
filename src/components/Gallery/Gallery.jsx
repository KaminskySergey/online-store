import styled from "styled-components"
import axios from "axios"
import { useSelector } from "react-redux"
import { ProductSample } from "API/API"
import { GalleryItem, GalleryList, ProductImage, Thumb } from "./Gallery.styled";



axios.defaults.baseURL = "https://localhost:8000";

export const Gallery = () => {
    
    const products = useSelector(state => state.gallery.items)
    
    //====================== ЗАГЛУШКА ДЛЯ СТИЛИЗАЦИИ
    
    // Товары взяты из src/API/ProductSample. Для фетча по запросу сёрча заменить на products в рендере. product.image заменить на product.productImage!!!

    // ======================= КОНЕЦ ЗАГЛУШКИ

    return (<GalleryList>
        {/* <button onClick={onClick}>GET CATEGORY</button> */}
        {ProductSample.map(product => <GalleryItem key={product.id}>
            <Thumb>
                <ProductImage src={product.image} alt="product"></ProductImage>
            </Thumb>
                <p>{product.name}</p>
                <p>{product.price} UAH</p>
        </GalleryItem>)}
    </GalleryList>)
}