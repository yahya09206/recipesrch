import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

// Global state of the app
// - Search object
// - Current recipe object
// - Shopping list object
// - Liked recipes
const state = {};

// Search function
const controlSearch = async () => {
	// 1) Get query from view
	const query = 'pizza' // TODO

	if (query) {
		// 2) New search object and add to state
		state.search = new Search(query);

		// 3) Prepare UI for results

		// 4) Search for recipes
		await state.search.getResults();

		// 5) Render results on UI
		console.log(state.search.result);
	}
}

// Event listener for search button
elements.searchForm.addEventListener('submit', e => {
	e.preventDefault();
	controlSearch();

});
