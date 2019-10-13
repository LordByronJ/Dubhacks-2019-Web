const uploadBox = document.getElementById("upload-box");
const realFile = document.getElementById("real-file");

uploadBox.addEventListener('click', function() {
	realFile.click();
});

realFile.addEventListener('change', function() {

		alert(realFile.value);
	if(realFile.value) {
		var file = document.getElementById('uploadBox');
		var div = document.createElement('div');
		div.innerHTML = 'new div';
		file.appendChild('div');
	}

		// var div = document.createElement('div');
		// div.style.background = 'green';
		// div.style.text = 'hello';
  	// uploadBox.appendChild(div);
});
