export const elements = {
	searchForm: 		document.querySelector('.search'),
	searchInput: 		document.querySelector('.search__field'),
	searchResultsList:  document.querySelector('.results__list')
};

// AJAX spinner
export const renderLoader = parent => {
	const loader = `
		<div class="loader">
			<svg>
				<use href="img/icons.svg#icon-cw"></use>
			</svg>
		</div>
	`
}