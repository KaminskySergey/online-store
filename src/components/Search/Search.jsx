import styled from "styled-components"
import { BiSearch } from "react-icons/bi";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsThunk } from "Redux/gallery/gallery.thunk";

const StyledSearch = styled.div`
    /* display: flex; */
    position: relative;
    flex-direction: column;
    margin-left: 50px;
    margin-bottom: 20px;
    label {
        position: absolute;
        top: 6px;
        left: 4px;
        font-weight: 500;
        margin-bottom: 8px;
    }
    input {
        width: 600px;
        height: 24px;
        border: 1px solid silver;
        border-radius: 4px;
        padding-left: 24px;

        &:hover,
        &:focus  {
        outline: none;
        border: 1px solid green;
        }
    }
`

export const Search = () => {
    const [search, setSearch] = useState("");
    const searchInputId = nanoid();

    const dispatch = useDispatch();

    const onInputChange = (event) => {
    setSearch(event.target.value)
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        dispatch(getProductsThunk(search))
    }
  

    return (
        <StyledSearch>
        <form onSubmit={onSubmit}>
        <label htmlFor={searchInputId}> <BiSearch/> </label>
    <input
        type="text"
        name="search"
        id={searchInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={search}
        onChange={onInputChange}
                />
                </form>
        </StyledSearch>
    )
}