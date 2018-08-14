import { SET_EASY_MODE, SET_HARD_MODE } from './reducer'

const easyMode = { type: SET_EASY_MODE }
const hardMode = { type: SET_HARD_MODE }

export const setMode = (mode) => Object.assign({}, mode && mode === 'easy' ? easyMode : hardMode, { mode })