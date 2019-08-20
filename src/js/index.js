import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

// Global state of the app
// - Search object
// - Current recipe object
// - Shopping list object
// - Liked recipes
const state = {};

// Search function
const controlSearch = async () => {
	// 1) Get query from view
	const query = searchView.getInput();
	console.log(query);

	if (query) {
		// 2) New search object and add to state
		state.search = new Search(query);

		// 3) Prepare UI for results
		searchView.clearInput();
		searchView.clearResults();
		renderLoader(elements.searchRes);


		// 4) Search for recipes
		await state.search.getResults();

		// 5) Render results on UI
		clearLoader();
		searchView.renderResults(state.search.result);
	}
}

// Event listener for search button
elements.searchForm.addEventListener('submit', e => {
	e.preventDefault();
	controlSearch();

});

elements.searchResPages.addEventListener('click', e => {
	const btn = e.target.closest('.btn-inline');
	if (btn) {
		const goToPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResults();
		searchView.renderResults(state.search.result, goToPage);
	}
});

// Recipe Controller
const controlRecipe = async () => {
	// Get id from url
	const id = window.location.hash.replace('#', '');
	console.log(id);

	if (id) {
		// Prepare ui for changes

		// Create new recipe object
		state.recipe = new Recipe(id);

		// Get recipe data
		await state.recipe.getRecipe();

		// Calculate servings and time
		state.recipe.calcTime();
		state.recipe.calcServing();
		// Render recipe
		console.log(state.recipe);
	}
};
window.addEventListener('hashchange', controlRecipe);
