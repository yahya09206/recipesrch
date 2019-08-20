export const elements = {
	searchForm: 		document.querySelector('.search'),
	searchInput: 		document.querySelector('.search__field'),
	searchRes:     	document.querySelector('.results'),
	searchResultsList:  document.querySelector('.results__list')
};

export const elementStrings = {
	loader: 'loader'
};

// AJAX spinner
export const renderLoader = parent => {
	const loader = `
		<div class="${elementStrings.loader}">
			<svg>
				<use href="img/icons.svg#icon-cw"></use>
			</svg>
		</div>
	`;
	parent.insertAdjacentHTML('afterbegin', loader);
}

// Clear loader
export const clearLoader = () => {
	const loader = document.querySelector(`.${elementStrings.loader}`);
	if (loader) loader.parentElement.removeChild(loader);
};