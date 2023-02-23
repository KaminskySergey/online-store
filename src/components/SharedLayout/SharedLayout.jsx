import { Logo } from "components/Logo/Logo"
import { Search } from "components/Search/Search"
import { Outlet } from "react-router-dom/dist"

export const SharedLayout = () => {
    return (<><Logo />
        <Search />
        <Outlet/>
            </>)}