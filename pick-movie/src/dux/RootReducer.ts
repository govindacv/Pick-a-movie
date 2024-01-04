import { combineReducers } from "redux";
import SearchSliceReducer from "./SearchSlice";
import GenerSliceReducer from '../dux/GenerSlice'
import ActorSliceReducer from '../dux/ActorSlice'
const RootReducer=combineReducers({
    search:SearchSliceReducer,
    gener:GenerSliceReducer,
    actor:ActorSliceReducer
})

export default RootReducer