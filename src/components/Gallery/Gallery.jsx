import { productsDefault } from "API/API"
import styled from "styled-components"
import axios from "axios"

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
    width: 100%;
`

axios.defaults.baseURL = "https://localhost:8000";

export const Gallery = () => {

    const onClick = async () => {
        try {
      const response = await axios.get("/category");
      console.log(response)
            return response;
            
    } catch (error) {
            return console.log(error);
    }
    }

    return (<GalleryList>
        <button onClick={onClick}>GET CATEGORY</button>
        {productsDefault.map(product => <GalleryItem key={product.id}>
            <Thumb>
                <img src={product.image} alt="product"></img>
            </Thumb>
                <p>{product.name}</p>
                <p>{product.price} UAH</p>
        </GalleryItem>)}
    </GalleryList>)
}