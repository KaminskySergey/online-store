import {GrCart } from "react-icons/gr";
import styled from "styled-components";

const CartIcon = styled(GrCart)`
    width: 28px !important;
    height: 28px !important;
`

export const Cart = () => {
    return(<CartIcon />)
}