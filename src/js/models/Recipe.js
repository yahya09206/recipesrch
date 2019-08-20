import axios from 'axios';
import { key } from '../config';

export default class Recipe {
	constructor(id){
		this.id = id;
	}
	async getRecipe() {
		try {
			const res = await axios(`https://www.food2fork.com/api/?key=${key}&rid=${this.id}`);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	}
}