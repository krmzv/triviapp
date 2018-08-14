export const SET_QUESTIONS = "SET_QUESTIONS"
export const SET_ANSWER = "SET_ANSWER"
export const RESET_QS = "RESET_QS"


export function questions(state = [], action){
	switch(action.type){
		case SET_QUESTIONS:
			return action.questions
		case SET_ANSWER:
			return state.map((q, idx) => idx === action.idx ? Object.assign({}, q, { users_answer: action.answer }) : state[idx])
		case RESET_QS:
			return []
		default:
			return state
	}
}