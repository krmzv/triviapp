import { combineReducers } from "redux";
import { questions } from '../components/Quiz/reducer'
import { mode } from '../components/Splash/reducer'

const state = combineReducers({
    questions,
    mode
})

export default state