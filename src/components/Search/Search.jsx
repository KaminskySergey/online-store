
import { BiSearch } from "react-icons/bi";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsThunk } from "Redux/gallery/gallery.thunk";
import { StyledSearch } from "./Search.styled";



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
        setSearch('')
    }
  

    return (
        <StyledSearch>
        <form onSubmit={onSubmit}>
        <label htmlFor={searchInputId}> <BiSearch/> </label>
    <input
        placeholder="Enter item..."
        type="text"
        name="search"
        id={searchInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={search}
        onChange={onInputChange}
                />
    <button type="submit">Search</button>
                </form>
        </StyledSearch>
    )
}