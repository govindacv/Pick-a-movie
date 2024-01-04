import { createSlice } from "@reduxjs/toolkit"

const initialState={
    chooseMovie:[]
}
const QuestionSlice=createSlice({
    name:'questions',
    initialState,
    reducers :{
        addToChoosenMovie:(state,{payload})=>{
            state.chooseMovie=payload
        }
    }
})
export default QuestionSlice.reducer
export const getChoosenMovie=(state:any)=>state.questions.chooseMovie
export const {addToChoosenMovie}=QuestionSlice.actions
