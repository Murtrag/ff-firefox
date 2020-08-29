let backCard = '';
let frontCard = '';
browser.contextMenus.onClicked.addListener(function(info, tab) {
    switch (info.menuItemId) {
        case "add-head":
            var text = getTextIfExists(info)
            var image = getImageIfExists(info);
              frontCard += (text || image) + "<br>";
            console.log(frontCard)
            break;

        case "add-tail":
            var text = getTextIfExists(info)
            var image = getImageIfExists(info);
              backCard += (text || image) + "<br>";
            console.log(backCard)
            break;

	case "create-card":
        kwargs = {
		type: "open_card",
		card: {
		    frontCard: frontCard,
		    backCard: backCard
		}
        }
        browser.tabs.sendMessage(tab.id, kwargs);

    }
})


// function openPage() {
// 	  browser.tabs.create({
// 		      url: "https://developer.mozilla.org"
// 		    });
// }

// browser.browserAction.onClicked.addListener(openPage);
