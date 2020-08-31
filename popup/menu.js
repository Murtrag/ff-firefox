document.addEventListener("click", function(e) {
	if (!e.target.classList.contains("page-choice")) {
		return;
	}
	var tab = browser.tabs.query({
		  active: true,
		  currentWindow: true
	})
	var page_id = e.target.dataset.id;
	tab.then(e=>{
		console.log(e[0].id);
		browser.tabs.sendMessage(e[0].id, {
			type: "open_menu",
			page: page_id
		});
	});

	// browser.tabs.getCurrent().then((v)=>{console.log(v)})


});
