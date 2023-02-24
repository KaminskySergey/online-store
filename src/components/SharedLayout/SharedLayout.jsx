import { Cart } from "components/Cart/Cart"
import { Logo } from "components/Logo/Logo"
import { Search } from "components/Search/Search"
import { Outlet } from "react-router-dom/dist"
import styled from "styled-components"

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
`

export const SharedLayout = () => {
    return (<><HeaderWrapper><Logo />
        <Search /><Cart/></HeaderWrapper>
        <Outlet/>
            </>)}