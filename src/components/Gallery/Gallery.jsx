import styled from "styled-components"
import axios from "axios"
import { useSelector } from "react-redux"
import { ProductSample } from "API/API"

const GalleryList = styled.ul`
    list-style: none;
    display: flex;
    margin-top: 24px;
    flex-wrap: wrap;
    gap: 8px;
`

const GalleryItem = styled.li`

    border: 1px solid #2e2e2e80;
    flex-basis: calc((100% - 60px) / 3);
    
    border-radius: 4px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);

    p {
        margin-left: 8px;
    }
`

const Thumb = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    padding: 4px;
    
`

const ProductImage = styled.img`
    max-width: 100%;
    max-height: 200px;
    
`

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