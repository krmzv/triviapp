export const REQ_START = "REQ_START"
export const REQ_END = "REQ_END"

export function isFetching(state = false, action){
	switch(action.type){
		case REQ_START:
			return true
		case REQ_END:
			return false
		default: 
			return state
	}
}