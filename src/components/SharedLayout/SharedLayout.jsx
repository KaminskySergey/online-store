import Box from "Box/Box"
import { Cart } from "components/Cart/Cart"
import { Categories } from "components/Categories/Categories"
import { Logo } from "components/Logo/Logo"
import { Search } from "components/Search/Search"
import { Outlet } from "react-router-dom/dist"

import { HeaderWrapper } from "./SharedLayout.styled"



const SharedLayout = () => {
    return (
    <>
    <HeaderWrapper>
        <Logo />
        <Search />
        <Cart/>
    </HeaderWrapper>
    <Box display='flex' ml='auto' mr='auto' pl={32} pr={32}>
    <Categories />
        <Outlet/>
    </Box>
    </>)}

export default SharedLayout;