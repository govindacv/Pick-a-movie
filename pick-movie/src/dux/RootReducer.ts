import { combineReducers } from "redux";
import SearchSliceReducer from "./SearchSlice";
import GenerSliceReducer from '../dux/GenerSlice'
import ActorSliceReducer from '../dux/ActorSlice'
import QuestionSlice from "./QuestionSlice";
const RootReducer=combineReducers({
    search:SearchSliceReducer,
    gener:GenerSliceReducer,
    actor:ActorSliceReducer,
    questions:QuestionSlice
})

export default RootReducer