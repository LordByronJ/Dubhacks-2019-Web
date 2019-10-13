const functions = require('firebase-functions');
const {Firestore} = require('@google-cloud/firestore');
const {Storage} = require('@google-cloud/storage');
 
// Creates clients
const firestore = new Firestore();
const storage = new Storage();

exports.helloworld = functions.https.onRequest(async (req, res) => {
	res.send('Hello!');
});

exports.getdocs = functions.https.onRequest(async (req, res) => {
	const allImages = [];

	let allImagesRef = await firestore.collection('images').get();
	allImagesRef.forEach(img => {
		let name = img._fieldsProto.name.stringValue;
		name = name.substr(0, name.length-4).substr(0, 10) + name.substr(-4);
		allImages.push({
			'name': name,
			'url': img._fieldsProto.url.stringValue,
		});
	});

	res.send(allImages);
});