function createModal(frontCard, backCard){
    var modal = document.createElement("div");
    modal.innerHTML = `
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add new card</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <p>front:</p>
              <textarea cols='45' rows='5'>${frontCard}</textarea>
            <br><br>
            <p>back:</p>
              <textarea cols='45' rows='5'>${backCard}</textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    `
    document.getElementsByTagName('body')[0].appendChild(modal);
    }


// browser.runtime.onMessage.addListener(request => {
// 	  console.log("Message from the background script:");
// });

browser.runtime.onMessage.addListener(dispacher);

function dispacher(message) { 
	switch(message.type){
		case "open_menu":
			console.log('open_menu')
			break;
		case "open_card":
			createModal(message.card.frontCard, message.card.backCard);
			$('.modal').modal("show");
			break;
	}
  // setTimeout(function() {$('.modal').modal("show"); console.log("modal")}, 0);
}

