export const SET_QUESTIONS = "SET_QUESTIONS"
export const RESET_QS = "RESET_QS"


export function questions(state = [], action){
	switch(action.type){
		case SET_QUESTIONS:
			return [...state, action.questions]
		case RESET_QS:
			return []
		default:
			return state
	}
}