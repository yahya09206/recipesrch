// App controller
import axios from 'axios';

export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getResults(query) {
			const key = '75d8cd037b7dbc5f872b050a9990aee1';
		try {
			const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
			this.result = res.data.recipes;
			// console.log(this.result);
		} catch (error){
			alert(error);
		}
	}
}