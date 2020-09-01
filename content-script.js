browser.runtime.onMessage.addListener(dispacher);

function dispacher(message) { 
	switch(message.type){
		case "open_menu":
			switch(message.page){
				case "1":
					console.log('manager');
					createManager();
					break;
				case "2":
					console.log("page2")
					break;
				case "3":
					console.log("page3")
					break;

			}
			break;

		case "open_card":
			createModal(message.card.frontCard, message.card.backCard);
			$('.modal').modal("show");
			break;
	}
}
