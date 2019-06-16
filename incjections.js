function injectItems(){
	console.log("KURWAaa?")
	var imported = document.createElement('script');
	imported.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js';
	document.body.appendChild(imported);
	console.log(document.querySelector("head").children)
	$('.modal').modal("show");
}

