(function($) {

	window.hypeApp = {
		Events: {}
	};

	hypeApp.Events = {

		onStart: function () {

			function checkForLocal() {
				// is Local Storage Availble to Browser
					// if it is render items
					// else render the homepage
			}

			// Call Check For Local
						
		}

	},

	hypeApp.init = function( config ){
		this.username = config.username;
		this.Events.onStart();
	};

	hypeApp.init({ username: 'clintonhalpin' });


})(jQuery);