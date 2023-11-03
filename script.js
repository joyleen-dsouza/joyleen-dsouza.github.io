const poems = [
	{
		title: 'Abandoned',
		lines: [
			'Where am I? I know not',
			'The way back home, I forgot',
			'Is this my reward for loyalty?',
			'All the love and care just empty?',
			'',
			'I miss those hugs, miss that food',
			'The people are here are not so good',
			'Trash is what fills my stomach',
			"With heartless creatures, I'm stuck.",
			'',
			'Pipes and footpath as my bed',
			'All I have is tears to shed',
			'Nights of comfort now deprived',
			'Living the days only terrified.',
			'',
			'Just a rumour that you hear',
			'Made you abandon me forever',
			'I wait to be called by my name',
			"Won't things ever be the same?",
			'',
			'Am I still your Oscar',
			'Or just a random dog here?',
			'Will I ever again get love',
			'Or forever be a trivial bhow?',
		],
		imgSrc: 'images/abandoned.jpg',
		imgAltText: 'dog image',
		date: '2020-05',
	},
	{
		title: 'Deceiving Flower',
		lines: [
			'In this land of thorns',
			'Full of grief and full of mourns',
			'You bloomed like a flower',
			'Was it love and care to shower?',
			'',
			'Like a flower to a bee',
			'You were more than that to me',
			'Like flowers for the altar',
			'You always adorned my prayer',
			'',
			'I watered you day and night',
			'Only expected to be treated right',
			'Petals that seemed arms of love',
			'Are brutal swords of anguish now',
			'',
			'You used and abused and left me',
			'Now not even thorns to protect me',
			'The beautiful flower I thought you were',
			"Ended up decorating my soul's grave",
		],
		imgSrc: 'images/deceivingflower.jpg',
		imgAltText: 'flower image',
		date: '2019-07',
	},
	{
		title: 'Nightmare',
		lines: [
			'At the dawn',
			'I still had yawn',
			'The night so deep',
			'But still no sleep',
			'',
			'Thoughts that came',
			'Drove me insane',
			'You would be there',
			'But not in my air',
			'',
			'You would sing',
			'And give her the ring',
			'But what if that she',
			"Wouldn't be me",
			'',
			'The anxiety flew',
			"Coz it wasn't true",
			'You are mine',
			'And me forever thine',
		],
		imgSrc: 'images/nightmare.jpg',
		imgAltText: 'moon image',
		date: '2019-06',
	},
	{
		title: 'She',
		lines: [
			'All she needs is',
			'Not power, not authority, not sympathy.',
			'A life that isnt controlled by the thoughts of the society.',
			'A life that doesnt objectify us.',
			'A life that isnt suppressed for the honour of the family.',
			'A life that isnt considered a burden for anyone.',
			'A life that isnt mocked continuously.',
			'A life with equal opportunities.',
			'A life having the freedom to fly high.',
			'A life that is secure at all times of the day.',
			'All she needs is a life with just the right amount of respect!',
		],
		imgSrc: 'images/she.jpg',
		imgAltText: 'picture of a girl',
		date: '2021-02',
	},
	{
		title: 'What if I say',
		lines: [
			'What if I say,',
			'I was broken when you left',
			'Day and night I had wept',
			'My soul is what you tore',
			"But still I'll love you more",
			'',
			'What if I say,',
			'I still wait for your call',
			'Search my peace in alcohol',
			'Self worth burnt to cinder',
			'But will care for you forever',
			'',
			'What if I say,',
			"Living without you, I can't",
			'I will be the way you want',
			'Will always give you plenty',
			"Even though right now I'm empty",
			'',
			'Then will you,',
			'Come back to me',
			'And set my achy soul free',
			'Love and respect me just a little',
			"And never break my heart that's brittle?",
		],
		imgSrc: 'images/whatif.jpg',
		imgAltText: 'broken glass',
		date: '2020-04',
	},
	{
		title: 'Friend',
		lines: [
			"I know you feel 'Lost'",
			"Thoughts like 'What I've done'",
			"With a 'faint' idea of what's yet to come",
			"All good memories 'forgotten'",
			"Negative thoughts 'crawling' in your head",
			"With positivity being 'invisible'",
			"But 'in the end'",
			"You are going to win this 'war'",
			"'Roads untravelled' always bring fear",
			"Just know that you are 'halfway right'",
			"I know it is always 'easier to run'",
			"But you are not someone who would 'runaway'",
			"So all the doubts, just 'burn it down'",
			"Negativity, just 'bleed it out'",
			"Soon there will be 'no more sorrow'",
			"And you will 'wake' up to a better tomorrow",
			"It does feel 'heavy' 'from the inside'",
			"But 'don't stay' in this gloominess",
			"There is no choice to have 'given up'",
			"The 'rebellion' in you will have to revolt",
			"Just take 'one step closer'",
			"Towards 'the radiance' of hope",
			"Fight with 'hands held high' 'until it's gone'",
			"Don't forget you are 'not alone'",
			"It might feel like 'nobody's listening'",
			"But remember, I'm always there 'with you'",
		],
		imgSrc: 'images/friend.jpg',
		imgAltText: 'handshake',
		date: '2023-05',
	},
];

function hideModal() {
	modalContent.innerHTML = '';
	modal.style.display = 'none';
}

function showModal(dom) {
	modalContent.appendChild(dom);
	modal.style.display = 'block';
}

function createPoemDomForModal(poem) {
	/*
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

	// title
	const title = document.createElement('div');
	title.classList.add('title');
	const titleName = document.createElement('h3');
	titleName.textContent = poem.title;
	title.appendChild(titleName);

	// poem content
	const poemContent = document.createElement('div');
	poemContent.classList.add('poem-lines');

	poem.lines.forEach(line => {
		let pLine = document.createElement('p');
		pLine.textContent = line;

		if (line.length === 0 || line === '')
			pLine = document.createTextNode('\u00A0');

		poemContent.appendChild(pLine);
	});

	// date
	const date = document.createElement('span');
	date.classList.add('date');
	date.textContent = new Date(poem.date)
		.toLocaleString('en-US', {
			month: 'short',
			year: 'numeric',
		})
		.replace(' ', ', ');

	// append title, poem content and date
	const poemDiv = document.createElement('div');
	poemDiv.classList.add('poem');

	poemDiv.appendChild(title);
	poemDiv.appendChild(poemContent);
	poemDiv.appendChild(date);

	return poemDiv;
}

function createPoemItemDom(poem) {
	/*
	<div class="item">
		<span>Friend</span>
		<div class="item-img-div">
			<img
				class="item-img"
				src="images/friend.jpg"
				alt="handshake"
			/>
		</div>
	</div>
	*/

	// title
	const title = document.createElement('span');
	title.textContent = poem.title;

	// item image
	const img = document.createElement('img');
	img.classList.add('item-img');
	img.setAttribute('src', poem.imgSrc);
	img.setAttribute('alt', poem.imgAltText);

	// item image container
	const div = document.createElement('div');
	div.classList.add('item-img-div');
	div.appendChild(img);

	// append everything
	const poemItem = document.createElement('div');
	poemItem.classList.add('item');

	// attach poem, title and date fields, helps in sorting
	poemItem.poem = poem;
	poemItem.title = poem.title;
	poemItem.date = poem.date;

	poemItem.appendChild(title);
	poemItem.appendChild(div);

	return poemItem;
}

function toggleSortBtn() {
	if (sortBy.dataset.sort === 'asc') {
		sortBy.dataset.sort = 'desc';
		sortBy.textContent = '⬆';
	} else {
		sortBy.dataset.sort = 'asc';
		sortBy.textContent = '⬇';
	}
}

function reorderItems(filterBy, sortBy) {
	let divs = [...poemList.querySelectorAll('.item')];
	divs.forEach(div => div.remove());
	divs = sortItems(divs, filterBy, sortBy);
	divs.forEach(div => poemList.append(div));
}

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

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.modal-close span');
const poemList = document.querySelector('.poem-list');
const filterBy = document.querySelector('.filter-by');
const sortBy = document.querySelector('.sort-by');

// modal action
closeModal.addEventListener('click', hideModal);
window.addEventListener('click', function (event) {
	if (event.target === modal) hideModal();
});

// event listeners for reordering items
filterBy.addEventListener('change', () =>
	reorderItems(filterBy.value, sortBy.dataset.sort)
);
sortBy.addEventListener('click', () => {
	toggleSortBtn();
	reorderItems(filterBy.value, sortBy.dataset.sort);
});

// adding event delegation listeners to display modal for poems
poemList.addEventListener('click', function (e) {
	if (e.target.classList.contains('poem-list')) return;

	const target = e.target.closest('.item');
	showModal(createPoemDomForModal(target.poem));
});

// render items on page load
sortItems(poems, 'a-z', 'asc').forEach(p =>
	poemList.appendChild(createPoemItemDom(p))
);
