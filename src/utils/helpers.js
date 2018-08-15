export const idFromUrl = (url) => parseInt(url.split('/')[2] - 1)
export const pageFromUrl = (url) => url.split('/')[1]