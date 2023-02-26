import { Categories } from "components/Categories/Categories"
import { Gallery } from "components/Gallery/Gallery"
import { useState } from "react"
import styled from "styled-components"

const HomePageWrapper = styled.div`
    display: flex;
`


export const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const onSearchSubmit = (query) => {
        setSearchQuery(query.toLowerCase().trim());
    }
    

    return(<HomePageWrapper><Categories/><Gallery/></HomePageWrapper>)
}