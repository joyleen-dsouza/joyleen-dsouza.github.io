'use strict';

/**
 * Clears the modal content and hide it
 */
function hideModal() {
	modal.classList.remove('visuallyshow');
	setTimeout(() => modal.classList.remove('show'), 700);

	modalContent.innerHTML = '';
}

/**
 * Appends the DOM into the modal content and displays the modal
 * @param {HTMLElement} dom Document element that is to be appended to modal content
 */
function showModal(dom) {
	modalContent.appendChild(dom);

	modal.classList.add('show');
	setTimeout(() => modal.classList.add('visuallyshow'), 1);
}

/**
 * Generates DOM for displaying poem on modal
 * @param {Object} poem Poem from poems array
 * @returns HTMLElement of generated DOM for modal
 */
function createPoemDomForModal(poem) {
	/* Creates this HTML element 

	<div class="poem">
		<div class="title">
			<h3>Title</h3>
		</div>
		<div class="poem-lines">
			<p>line 1</p>
			<p>line 2</p>
			<p>line 3</p>
		</div>
		<span class="date">Sep, 2023</span>
	</div>
	*/

	// init the reveal title to animate on scroll
	revealTitle.textContent = poem.title;

	// title
	const title = document.createElement('div');
	title.classList.add('title');
	const titleName = document.createElement('h3');
	titleName.textContent = poem.title;
	title.appendChild(titleName);

	// poem content
	const poemContent = document.createElement('div');
	poemContent.classList.add('poem-lines');

	// append poem lines
	poem.lines.forEach(line => {
		let pLine = document.createElement('p');
		pLine.textContent = line;

		if (line.length === 0 || line === '')
			pLine = document.createTextNode('\u00A0');

		poemContent.appendChild(pLine);
	});

	// date, format - Sep, 2023
	const date = document.createElement('span');
	date.classList.add('date');
	date.textContent = new Date(poem.date)
		.toLocaleString('en-US', {
			month: 'short',
			year: 'numeric',
		})
		.replace(' ', ', ');

	// append title, poem content and date to final element
	const poemDiv = document.createElement('div');
	poemDiv.classList.add('poem');

	poemDiv.appendChild(title);
	poemDiv.appendChild(poemContent);
	poemDiv.appendChild(date);

	return poemDiv;
}

/**
 * Generates DOM for displaying poem tile on the home page
 * @param {Object} poem Poem from poems array
 * @returns HTMLElement for tile to display on the home page
 */
function createPoemTileDom(poem) {
	/* Creates this HTML element 
	
	<div class="tile">
		<span>Friend</span>
		<div class="tile-img-div">
			<img
				class="tile-img"
				src="images/friend.jpg"
				alt="handshake"
			/>
		</div>
	</div>
	*/

	// title
	const title = document.createElement('span');
	title.textContent = poem.title;

	// tile image
	const img = document.createElement('img');
	img.classList.add('tile-img');
	img.setAttribute('src', poem.imgSrc);
	img.setAttribute('alt', poem.imgAltText);

	// tile image container
	const div = document.createElement('div');
	div.classList.add('tile-img-div');
	div.appendChild(img);

	// append everything
	const poemTile = document.createElement('div');
	poemTile.classList.add('tile');

	// attach poem, title and date fields, helps in sorting
	poemTile.poem = poem;
	poemTile.title = poem.title;
	poemTile.date = poem.date;

	poemTile.appendChild(title);
	poemTile.appendChild(div);

	return poemTile;
}

/**
 * Toggles the sort button and sets the data prop
 */
function toggleSortBtn() {
	if (sortBy.dataset.sort === 'asc') {
		sortBy.dataset.sort = 'desc';
		sortBy.textContent = '⬆';
	} else {
		sortBy.dataset.sort = 'asc';
		sortBy.textContent = '⬇';
	}
}

/**
 * Reorders tiles on the home page
 * @param {String} filterBy Filter by - date/a-z
 * @param {String} sortBy Sort - asc/desc
 */
function reorderItems(filterBy, sortBy) {
	let divs = [...poemList.querySelectorAll('.tile')];
	divs.forEach(div => div.remove());
	divs = sortItems(divs, filterBy, sortBy);
	divs.forEach(div => poemList.append(div));
}

/**
 * Sorts the given array based on the params provided
 * @param {Array} arr Array to be sorted
 * @param {String} filterBy Filter by - date/a-z
 * @param {String} sortBy Sort - asc/desc
 * @returns The resultant array
 */
function sortItems(arr, filterBy, sortBy) {
	if (filterBy === 'a-z') {
		if (sortBy === 'asc')
			return arr.sort((a, b) => a.title.localeCompare(b.title));
		else return arr.sort((a, b) => b.title.localeCompare(a.title));
	} else {
		if (sortBy === 'asc')
			return arr.sort((a, b) => new Date(a.date) - new Date(b.date));
		else return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
	}
}

/**
 * Reveals the title on the top on scroll (while displaying the modal)
 */
function revealTitleOnScroll() {
	const title = modal.querySelector('.title');
	if (!title) return;

	if (title.getBoundingClientRect().bottom < 80)
		revealTitle.classList.add('active');
	else revealTitle.classList.remove('active');
}

// main

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.modal-close span');
const revealTitle = modal.querySelector('.reveal-title');
const poemList = document.querySelector('.poem-list');
const filterBy = document.querySelector('.filter-by');
const sortBy = document.querySelector('.sort-by');

// modal action
// closing the modal
closeModal.addEventListener('click', hideModal);
window.addEventListener('click', e => {
	if (e.target === modal) hideModal();
});
// transition the title to top on scroll
modal.addEventListener('scroll', revealTitleOnScroll);

// event listeners for reordering tiles
filterBy.addEventListener('change', () =>
	reorderItems(filterBy.value, sortBy.dataset.sort)
);
sortBy.addEventListener('click', () => {
	toggleSortBtn();
	reorderItems(filterBy.value, sortBy.dataset.sort);
});

// adding event delegation listeners to display modal for poems
poemList.addEventListener('click', e => {
	if (e.target.classList.contains('poem-list')) return;

	const target = e.target.closest('.tile');
	showModal(createPoemDomForModal(target.poem));

	// do not preserve the scrolled state, scroll back to top on modal display
	modal.scrollTo(0, 0);
});

// render tiles on page load, default filter: a-z, sort: asc
sortItems(poems, 'a-z', 'asc').forEach(p =>
	poemList.appendChild(createPoemTileDom(p))
);
