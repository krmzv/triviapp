import { combineReducers } from "redux";
import { questions } from '../components/Quiz/reducer'
import { mode } from '../components/Splash/reducer'
import { isFetching } from '../utils/requestReducer'

const state = combineReducers({
    questions,
    mode,
    isFetching
})

export default state