export class Request{
	constructor(url, data){
		this.url = url
		this.data = data
	}

	async createNewCofession(day, date, time){
		try{
			const res = await fetch(this.url, {
				method: "POST",
				body: JSON.stringify({...this.data, day, date , time}),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const data = await res.json();
			console.log(data);
		} catch(error){
			console.error(error.message);
		}	

	}
}