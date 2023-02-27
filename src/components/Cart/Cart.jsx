import {RiShoppingCartFill } from "react-icons/ri";
import styled from "styled-components";

const CartIcon = styled(RiShoppingCartFill)`
    width: 28px !important;
    height: 28px !important;
    fill: white;
`

export const Cart = () => {
    return(<CartIcon />)
}