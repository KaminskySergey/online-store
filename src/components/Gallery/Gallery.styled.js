import styled from "styled-components"


export const GalleryList = styled.ul`
    list-style: none;
    display: flex;
    margin-top: 24px;
    flex-wrap: wrap;
    gap: 8px;
`

export const GalleryItem = styled.li`

    border: 1px solid #2e2e2e80;
    flex-basis: calc((100% - 60px) / 3);
    
    border-radius: 4px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);

    p {
        margin-left: 8px;
    }
`

export const Thumb = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    padding: 4px;
    
`

export const ProductImage = styled.img`
    max-width: 100%;
    max-height: 200px;
    
`