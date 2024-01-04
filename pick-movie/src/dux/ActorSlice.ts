import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchedActor: [],
    selectedMovie:[]
}
const ActorSlice = createSlice({
    name: 'actor',
    initialState,
    reducers: {
        addToSearchedActor: (state, { payload }) => {
            state.searchedActor = payload
        },
        addToSelectedMovieOfActor:(state,{payload})=>{
            state.selectedMovie=payload
        }
    }
})
export const getSearchedActor = (state: any) => state.actor.searchedActor
export const getSelectedMovieOfActor = (state: any) => state.actor.selectedMovie

export default ActorSlice.reducer
export const { addToSearchedActor,addToSelectedMovieOfActor } = ActorSlice.actions