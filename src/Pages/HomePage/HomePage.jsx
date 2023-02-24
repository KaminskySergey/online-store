import { Categories } from "components/Categories/Categories"
import { Gallery } from "components/Gallery/Gallery"
import styled from "styled-components"

const HomePageWrapper = styled.div`
    display: flex;
`


export const HomePage = () => {
    return(<HomePageWrapper><Categories/><Gallery/></HomePageWrapper>)
}