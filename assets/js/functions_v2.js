(function($) {

	window.hypeApp = {
		Events: {}
	};

	hypeApp.Events = {
		onStart: function () {
			console.log('We Started');
		},

		onThat: function() {
			console.log('Something Else');
		}
	},

	hypeApp.init = function( config ){
		this.username = config.username;
		this.Events.onStart();
		this.Events.onThat();
	};

	hypeApp.init({ username: 'clintonhalpin' });


})(jQuery);