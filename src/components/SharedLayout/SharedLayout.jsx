import { Cart } from "components/Cart/Cart"
import { Logo } from "components/Logo/Logo"
import { Search } from "components/Search/Search"
import { Outlet } from "react-router-dom/dist"

import { HeaderWrapper } from "./SharedLayout.styled"



export const SharedLayout = () => {
    return (
    <>
    <HeaderWrapper>
        <Logo />
        <Search />
        <Cart/>
    </HeaderWrapper>
        <Outlet/>
    </>)}