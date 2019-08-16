import axios from 'axios';

async function getResults(query) {
	try {

		const key = '75d8cd037b7dbc5f872b050a9990aee1';
		const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
		const recipes = res.data.recipes;
		console.log(recipes);
	} catch (error){
		alert(error);
	}
}
getResults('pizza');
