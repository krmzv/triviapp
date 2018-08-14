const url = (d) => {
	const r = `https://opentdb.com/api.php?amount=10&difficulty=${d}&type=boolean`
	return r
}

export function getData(difficulty) {
	return new Promise((resolve, reject)=>{
		fetch(url(difficulty))
			.then(res => resolve(res.json()))
			.catch(err => reject(err))
		});
}
