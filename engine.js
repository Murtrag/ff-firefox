// head = head || '';
// tail = tail || '';
// head = typeof(head) == 'undefined' ? '' : head;
// tail = typeof(tail) == 'undefined' ? '' : tail;


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
            "frontCard": frontCard,
            "backCard": backCard
        }
        browser.tabs.sendMessage(tab.id, kwargs);

    }
})