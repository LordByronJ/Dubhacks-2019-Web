const docGrid = document.getElementById('doc-grid');

populateDocGrid();

function populateDocGrid() {
	let docs = [{
		type: 'image',
		filename: 'placeholder.png',
		payload: 'https://via.placeholder.com/90x90',
	},{
		type: 'image',
		filename: 'placeholder.png',
		payload: 'https://via.placeholder.com/130x130',
	},{
		type: 'image',
		filename: 'placeholder.png',
		payload: 'https://via.placeholder.com/100x100',
	},{
		type: 'image',
		filename: 'placeholder.png',
		payload: 'https://via.placeholder.com/500x500',
	},{
		type: 'image',
		filename: 'placeholder.png',
		payload: 'https://via.placeholder.com/80x80',
	}];

	for (let doc of docs) {
		addDocumentToGrid(doc);
	}
}

function addDocumentToGrid(doc) {
	if (doc.type === 'image') {
		docGrid.innerHTML += `<div class='doc doc-image'><img src='${doc.payload}' alt='${doc.filename}'></img></div>`;
	} else if (doc.type === 'text') {
		docGrid.innerHTML += `<div class='doc doc-text'><p>${doc.payload}</p></div>`;
	} else {
		docGrid.innerHTML += `<div class='doc doc-${doc.type}'>${doc.payload}</div>`;
	}
}