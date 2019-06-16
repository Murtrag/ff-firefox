browser.contextMenus.create({
    id: "add-head",
    title: "add to head side",
    contexts: ["all"]
});

browser.contextMenus.create({
    id: "add-tail",
    title: "add to revert side",
    contexts: ["all"]
});

browser.contextMenus.create({
    id: "create-card",
    title: "create card",
    contexts: ["all"]
    })

var head = "";
var tail = "";

browser.contextMenus.onClicked.addListener(function(info, tab) {
    switch (info.menuItemId) {
        case "add-head":
            head += info.selectionText;
            console.log(head);
            break;
        case "add-tail":
            tail += info.selectionText;
            console.log(tail);
            break;
	case "create-card":
	    var head = "";
	    var tail = "";
    }
})
