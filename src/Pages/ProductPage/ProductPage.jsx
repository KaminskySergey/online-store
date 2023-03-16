import axios from "axios";
import Box from "Box/Box";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product, Thumb } from "./ProductPage.styled";


const ProductPage = () => {
    const [product, setProduct] = useState([])
    const {productsId} = useParams()
console.log(productsId, 'productsId')
    useEffect(() => {
        try {
            const fetchProductId = async () => {
                const {data} = await axios.get(`http://localhost:8080/shop/product/${productsId}`)
                console.log(data, 'idData')
                setProduct(data)
            }
            fetchProductId()
        } catch (error) {
            
        }
    }, [productsId])
console.log(product, 'product')
    return(
        <>
        <Product>
            <Thumb>
                <Box display='flex'>
                    <div>
                        <img src={product.productImage} width='500px' alt={product.name} />
                    </div>
                    <div>
                            <p>gbg</p>
                            <p>gbg</p>
                            <p>gbg</p>
                            <p>gbg</p>
                            <p>gbg</p>
                    </div>
                </Box>
            </Thumb>
        </Product>
        </>
    )
}

export default ProductPage;