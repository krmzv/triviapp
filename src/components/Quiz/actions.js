import { getData } from '../../utils/apiCaller'
import { REQ_START, REQ_END } from '../../utils/requestReducer'
import { SET_QUESTIONS } from './reducer'

export const setQuestions = (questions) => ({
    type: SET_QUESTIONS,
    questions
})


export const getQuestions = (d) => {
	return dispatch => {
		dispatch({ type: REQ_START })
		return getData(d)
			.then(r => {
				dispatch(setQuestions(r.results))
				dispatch({ type: REQ_END })
			})
	}
}