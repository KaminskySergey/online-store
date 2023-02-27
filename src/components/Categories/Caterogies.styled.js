import styled from "styled-components"

export const List = styled.ul`
        list-style: none;
        min-width: 300px;
        padding-left: 0;
    `

export const Item = styled.li`

    border: 1px solid green;
    border-radius: 4px;
    padding: 8px 16px;
    margin: 8px;
    font-weight: 500;
    transition: all 250ms;
    cursor: pointer;
    &:hover, &:focus {
        transform: scale(1.1);
        color: blue;
        border: 1px solid black;
    }
`