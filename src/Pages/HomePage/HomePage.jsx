import Box from "Box/Box"
import { Categories } from "components/Categories/Categories"
import { Gallery } from "components/Gallery/Gallery"
import styled from "styled-components"




export const HomePage = () => {

    return(
    <>
    <Box display='flex' pl={16} pr={16}>
        <Categories/>
        <Gallery/>
    </Box>
    </>
    )
}