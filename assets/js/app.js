(function($) {

	var hypeM = {

		init: function( config ) {
			this.url = 'http://hypem.com/playlist/loved/' + config.username + '/json/1/data.json';
			this.template = config.template;
			this.container = config.container;
			this.uIEvents();
		},

		uIEvents: function() {
			var self = hypeM;

			function addSearchUI() {
				$('.util').html("<a class=\"\clear-search\"\ href=\"\#\"\>Clear Search</a>");
			};

			$(".clear-search").on("click", function(e) {					
					console.log('clicked');					
			});

			$(".search-hypeM").keydown(function(e) {
				if (e.which == 13) {
					
					// Capture Value and Encode to change spaces to %20's
					var 

					value = $(this).val(),
					valEncoded = encodeURIComponent(value.trim())
					;
					
					// Call Fetch Method with Encoded Value;

					self.fetch(valEncoded);
					
					addSearchUI();
					

					this.blur();
					
					return false;
				}
			});

			$(window).scroll(function() {
				var scroll = $(window).scrollTop();

				if ( scroll >= 20 ) {
					$(".header").addClass("header-small");
				} else {
					$(".header").removeClass("header-small");
				}
			});
		},

		fetch: function(valueEncoded) {
			self = this;

			var urlSearch = 'http://hypem.com/playlist/search/' + valueEncoded + '/json/1/data.json';
				
			$.getJSON( urlSearch, function( data ) {
				self.hypeData = $.map( data, function( hypeData ) {
					return hypeData;
				});

				self.attachTemplate(); 
			});					
		},

		attachTemplate: function(hypeData) {
			var template = Handlebars.compile( this.template );
			this.container.empty().append( template( this.hypeData ) );
		}, 
	};

	hypeM.init({
		template: $('#singleResult').html(),
		container: $('.hypeResults'),
		username: 'clintonhalpin'
	});


})(jQuery);












