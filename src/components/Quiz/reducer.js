export const SET_QUESTION = "SET_QUESTION"


export function quiz(state = {}, action){
	switch(action.type){
		case SET_QUESTION:
			return {
					...state,
					q: action.question
			}
		default:
			return state
	}
}