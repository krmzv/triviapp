export const idFromUrl = (url) => parseInt(url.split('/')[2] - 1)
export const pageFromUrl = (url) => url.split('/')[1]

export const calcScore = (qas) => qas.reduce((correctAnswers, x) => x.correct_answer === x.users_answer ? correctAnswers+1 : correctAnswers, 0)
