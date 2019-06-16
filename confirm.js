function createModal(frontCard, backCard){
    var modal = document.createElement("div");
    modal.innerHTML = `
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
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




browser.runtime.onMessage.addListener(popUp);

function popUp(message) { 
  console.log(message)
  createModal(message.frontCard, message.backCard);
   $('.modal').modal("show");
  // setTimeout(function() {$('.modal').modal("show"); console.log("modal")}, 0);
}
