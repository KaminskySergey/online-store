import styled from "styled-components"

const CategoriesList = styled.ul`
        list-style: none;
        min-width: 300px;
        padding-left: 0;
    `

const CategoryListItem = styled.li`

    border: 1px solid green;
    border-radius: 4px;
    padding: 8px 16px;
    margin: 8px;
`

export const Categories = () => {
    return (<CategoriesList>
        <CategoryListItem>Крупная бытовая техника</CategoryListItem>
        <CategoryListItem>Мелкая бытовая техника</CategoryListItem>
        <CategoryListItem>Смартфоны</CategoryListItem>
        <CategoryListItem>Ноутбуки</CategoryListItem>
        <CategoryListItem>Товары для дома</CategoryListItem>
        <CategoryListItem>Автотовары</CategoryListItem>
        <CategoryListItem>Детские товары</CategoryListItem>
        <CategoryListItem>Алкоголь</CategoryListItem>
        <CategoryListItem>Наркотики</CategoryListItem>
        <CategoryListItem>Не заходи сюда</CategoryListItem>
    </CategoriesList>)
}