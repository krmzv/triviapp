import { getData } from '../../utils/apiCaller'
import { SET_QUESTIONS } from './reducer'

export const setQuestions = (questions) => ({
    type: SET_QUESTIONS,
    questions
})

export const getQuestions = (d) => {
	return dispatch => {
		return getData(d)
			.then(r => setQuestions(r.result))
	}
}