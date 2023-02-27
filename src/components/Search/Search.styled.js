import styled from "styled-components";

export const StyledSearch = styled.div`
    /* display: flex; */
    position: relative;
    flex-direction: column;
    
    label {
        position: absolute;
        top: 10px;
        left: 8px;
        font-weight: 500;
        
    }
    input {
        width: 600px;
        height: 32px;
        border: 1px solid silver;
        border-radius: 4px;
        padding-left: 32px;
        &:hover,
        &:focus  {
        outline: none;
        border: 1px solid green;
        }
    
    }
    button {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 64px;
    height: 100%;
    border: none;
    background: #00a046;
    color: white;
    font-size: 16px;
    height: 100%;
    transition: all 250ms;
    cursor: pointer;
    &:hover, &:focus {
        color: #ccbebe;
    }
    }
`