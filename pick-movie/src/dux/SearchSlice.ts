import { createSlice } from "@reduxjs/toolkit";

const initialState={
    searchedMovies:[],
    selectedFromSearch:[]
}
const SearchSlice = createSlice({
        name:"search",
        initialState,
        reducers:{
            addToSearchedMovies:(state,{payload})=>{
                state.searchedMovies=payload
            },
            addToSelectedFromSearch:(state,{payload})=>{
                state.selectedFromSearch=payload
            }
        }
})

export const getSearchedMovies=(state:any)=>state.search.searchedMovies
export const getSelectedFromMovie=(state:any)=>state.search.selectedFromSearch

export const getResponse=(state:any)=>state.search.searchedMovies.Response 

export const {addToSearchedMovies,addToSelectedFromSearch} =SearchSlice.actions
export default SearchSlice.reducer