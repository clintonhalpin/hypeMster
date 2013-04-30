(function($) {

	window.hypeApp = {
		Events: {}
	};

	hypeApp.Events = {

		onStart: function () {

			function checkForLocal() {
				
				var key = 'searchHistoryfafa';

				if(localStorage && localStorage.getItem(key)) {
					console.log( JSON.parse( localStorage.getItem( key ) ) );
				} else {
					console.log('LocalStorage Hasn't been Set');
				}
			}

			checkForLocal();
		}

		

	},



	hypeApp.init = function( config ){
		this.username = config.username;
		this.Events.onStart();
	};

	hypeApp.init({ username: 'clintonhalpin' });


})(jQuery);