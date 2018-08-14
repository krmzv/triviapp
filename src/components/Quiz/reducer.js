export const SET_QUESTIONS = "SET_QUESTIONS"
export const SET_ANSWER = "SET_ANSWER"
export const RESET_QS = "RESET_QS"


export function questions(state = [], action){
	switch(action.type){
		case SET_QUESTIONS:
			return action.questions
		case SET_ANSWER:
			return [...state, state.find(x => indexOf(x) === action.idx ? Object.assign({}, ...state, { users_answer: action.answer }) : state)]
		case RESET_QS:
			return []
		default:
			return state
	}
}