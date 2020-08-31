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

function createManager(){
    document.querySelector('head').innerHTML += '<link rel="stylesheet" href="https://apps.ankiweb.net/css/bootstrap.min.css" type="text/css"/>';
    document.querySelector('head').innerHTML += '<link rel="stylesheet" href="https://apps.ankiweb.net/css/bootstrap-responsive.min.css" type="text/css"/>';
    document.querySelector('head').innerHTML += '<link rel="stylesheet" href="https://apps.ankiweb.net/css/bootstrap-docs-min.css" type="text/css"/>';
    var manager_div = document.createElement("div");
    manager_div.classList.add("manager");
    manager_div.style.cssText = "width: 50%; position: fixed;top:10%; left: 0; right: 0; margin: auto; z-index: 99999;";
	manager_div.innerHTML = `
		<style>
body {
	font-size: 16px;
	padding-top: 0;
	margin-left: 20px;
	margin-right: 20px;
	padding-left: 0;
	padding-right: 0;
}

		.container-narrow {
			max-width: 50em;
			margin: 0 auto;
			box-shadow: 0 0 0 99999px rgba(0, 0, 0, .5);
		}

		.navbar {
			margin-left: -33px;
			margin-right: -33px;
			padding-top: 0!important;
		}

		.nav {
			margin-top: 5px !important;
		}

		.logo {
			float: left;
			/*            margin-left: 14px;*/
		}

		h1, h2, h3, h4, h5, h6 {
			color: #317eac !important;
			margin-bottom: 0.25em;
		}

		h1, h2 {
			margin-top: 0.7em;
		}

		.navbar-inner {
			background: #0059b1 !important;
			box-shadow: 0px 2px 10px #000 !important;
			width: 100%;
		}

		.navbar-inverse .nav>li>a {
			color: #fff;
		}
		.navbar-inverse .nav>li>button.close {
			font-size: 2.2rem;
		}

		.navbar-inverse .nav>li>a:hover {
			background: #444;
		}


		.tocify-focus { font-weight: bold; }

		div.admonitionblock .icon {
			vertical-align: top;
			font-size: 1.1em;
			font-weight: bold;
			color: #527bbd;
			padding-right: 0.5em;
			width: 6em;
		}

		div.admonitionblock td.content {
			padding-left: 0.5em;
			padding-right: 0.5em;
			border-left: 3px solid #dddddd;
		}

		div.quoteblock {
			margin-top: 1.0em;
			margin-bottom: 1em;
			margin-right: 10%;
			color: #aaa;
			padding: 0.5em;
		}        


		div.sidebarblock > div.content {
			background: #ffffee;
			border: 1px solid #dddddd;
			border-left: 4px solid #f0f0f0;
			padding: 0.5em;
		}

		div.title, caption.title {
			color: #527bbd;
			font-weight: bold;
			text-align: left;
			margin-top: 1.0em;
			margin-bottom: 0.5em;
		}
		div.title + * {
			margin-top: 0;
		}
		p, ul, ol, td{
			color: white;
		}

		</style>
		<div class="container-narrow">

			<div class="navbar navbar-inverse navbar-static-top">
				<div class="navbar-inner">
					<a class="logo" href="/index.html"><img src="https://apps.ankiweb.net/img/anki-logo.png"></a>
					<ul class="nav pull-right">
						<li id="navhome" class=" active"><a href="/">Home</a></li>
						<li id="navmanual"><a href="/docs/manual.html">Cards</a></li>
						<li id="navhelp"><a href="https://faqs.ankiweb.net">Decks</a></li>
						<li><a href="https://ankiweb.net/">Contact</a></li>
						<li>
							<button type="button" class="close" aria-label="Close">
							  <span aria-hidden="true">&times;</span>
							  </button>
						</li>
					</ul>
					<ul class="nav">
					</ul>
				</div>
			</div>
			<script>
				document.getElementById("navhome").className += " active";
			</script>

			<style>
.navbar {
	margin-bottom: -8px;
}

    .span4 {
	    text-align: center;
    }

    .text-heading {
	    color: #317eac;
    }

    blockquote {
	    text-align: left;
	    color: #aaa;
	    margin-top: 2em;
    }

    h2 {
	    margin-top: 0.5em;
    }

    .lead {
	    padding-top: 30px;
    }

    .tab-pane h3:first-child {
	    margin-top: -5px;
    }
			</style>

			<div class="jumbotron masthead">
				<p class="lead">
				Anki integrity manager
				</p>
				Click button the button bellow to finish current deck

				<p>
				<a href="#download" onclick="goToByScroll('download');return false;" class="btn btn-primary btn-large">Done</a>
				</p>
			</div>
    `
    document.getElementsByTagName('body')[0].appendChild(manager_div);
    }

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
  // setTimeout(function() {$('.modal').modal("show"); console.log("modal")}, 0);
}

