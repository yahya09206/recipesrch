import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
	elements.searchInput.value = '';
};

export const clearResults = () => {
	elements.searchResultsList.innerHTML = '';
}

const limitRecipeTitle = (title, limit = 17) => {
	const newTitle = [];
	if (title.length > limit) {
		title.split(' ').reduce((acc, cur) => {
			if (acc + cur.length <= limit) {
				newTitle.push(cur);
			}
			return acc + cur.length;
		}, 0);
	} 
	return `${newTitle.join('')} ...`;
}


const renderRecipe = recipe => {
	const markup = `
	<li>
	    <a class="results__link" href="#${recipe.recipe_id}">
	        <figure class="results__fig">
	            <img src="${recipe.image_url}" alt="${recipe.title}">
	        </figure>
	        <div class="results__data">
	            <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
	            <p class="results__author">${recipe.publisher}</p>
	        </div>
	    </a>
	</li>
	`;
	elements.searchResultsList.insertAdjacentHTML('beforeend', markup);
};

const renderButtons = (page, numResults, resPerPage) => {
	const Pages = Math.ceil(numResults / resPerPage);
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
	// Display 10 results per page
	const start = (page - 1) * resPerPage;
	const end = page * resPerPage;

	recipes.slice(start, end).forEach(renderRecipe);
};







