// Add firebase config here

firebase.initializeApp(firebaseConfig);

const storageRef = firebase.storage().ref();
const db = firebase.firestore();

const uploadBox = document.getElementById("upload-box");
const realFile = document.getElementById("real-file");

uploadBox.addEventListener('click', function() {
	realFile.click();
});

realFile.addEventListener('change', function() {
	if (realFile.value) {

		const imageName = realFile.value.substr(realFile.value.lastIndexOf('\\') + 1);

		let imageRef = storageRef.child(imageName);
		let file = realFile.files[0];
		imageRef.put(file).then(function(snapshot) {
			console.log(`Uploaded ${imageName}`);
			snapshot.ref.getDownloadURL().then(url => {
				addToFirestore(imageName, url);
				createDiv(imageName, url);
			});
		});
	}
});

function addToFirestore(imageName, url) {
	db.collection("images").doc().set({
		name: imageName,
		url: url,
	}).then(() => {
		console.log(`${imageName} successfully written to Firestore.`);
	}).catch((error) => {
		console.error(`Error writing document ${imageName}`, error);
	});
}

function createDiv(imageName, url) {
	let div = document.createElement('div');
	div.style.backgroundImage = 'url(' + url + ')';
	uploadBox.appendChild(div);
}
