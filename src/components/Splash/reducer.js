export const SET_EASY_MODE = "SET_EASY_MODE"
export const SET_HARD_MODE = "SET_HARD_MODE"
export const RESET_MODE = "RESET_MODE"

export function mode(state = null, action){
  switch(action.type){
		case SET_EASY_MODE:
			return 'easy'
		case SET_HARD_MODE:
			return 'hard'
		case RESET_MODE:
			return null
		default:
			return state
	}
}