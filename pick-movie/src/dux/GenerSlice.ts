import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchedGener: [],
    selectedMovie:[]
    

}
const GenerSlice = createSlice({
    name: 'gener',
    initialState,
    reducers: {
        addToSearchedGener: (state, { payload }) => {
            state.searchedGener = payload
        }
        ,
        addToSelectedMove: (state, { payload }) => {
            state.selectedMovie = payload
        }
    }

})

export const  getSearchedGener=(state:any)=>state.gener.searchedGener
export const  getSelectedMovie=(state:any)=>state.gener.selectedMovie
export default GenerSlice.reducer

export const { addToSearchedGener,addToSelectedMove } = GenerSlice.actions