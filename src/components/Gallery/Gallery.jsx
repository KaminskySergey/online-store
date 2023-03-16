
import axios from "axios"
import { useSelector } from "react-redux"
import { GalleryItem, GalleryList, ProductImage, Thumb } from "./Gallery.styled";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";




axios.defaults.baseURL = "http://localhost:8080";

export const Gallery = () => {
    const [allProduct, setAllProduct] = useState([])
    const products = useSelector(state => state.gallery.items)
    //====================== ЗАГЛУШКА ДЛЯ СТИЛИЗАЦИИ
    console.log(products)
    // Товары взяты из src/API/ProductSample. Для фетча по запросу сёрча заменить на products в рендере. product.image заменить на product.productImage!!!

    // ======================= КОНЕЦ ЗАГЛУШКИ
    useEffect(() => {
        try {
            const fetchAllProduct = async () => {
                const {data} = await axios.get(`http://localhost:8080/shop/product`)
                console.log(data, 'data')
                setAllProduct(data)

            }
            fetchAllProduct()
        } catch (error) {
            
        }
    }, [])
    return (
    <>
    <GalleryList>
        {/* <button onClick={onClick}>GET CATEGORY</button> */}
        {allProduct.map(product => 
            <GalleryItem key={product.id}>
                <Link to={`/products/${product.id}`}>
                <Thumb>
                    <ProductImage src={product.productImage} alt="product"></ProductImage>
                </Thumb>
                <p>{product.name}</p>
                <p>{product.price} UAH</p>
                </Link>
            </GalleryItem>)}
    </GalleryList>
    </>
    )
}