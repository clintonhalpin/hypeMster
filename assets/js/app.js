(function($) {

	var hypeM = {

		init: function( config ) {
			this.url = 'http://hypem.com/playlist/loved/' + config.username + '/json/1/data.json';
			this.template = config.template;
			this.container = config.container;
			this.bindEvents();
		},

		attachTemplate: function(hypeData) {
			var template = Handlebars.compile( this.template );

			// Empty the Container

			this.container.empty();
			
			// Append To Container

			this.container.append( template( this.hypeData ) );
		},

		bindEvents: function() {
			var self = hypeM;

			$(".search-hypeM").keydown(function(e) {
				if (e.which == 13) {
					var value = $(this).val();
					self.fetch(value);

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
		
		fetch: function(value) {
			var self = this,
				v = encodeURIComponent(value.trim()),
				urlSearch = 'http://hypem.com/playlist/search/' + v + '/json/1/data.json';
				
			$.getJSON( urlSearch, function( data ) {
				self.hypeData = $.map( data, function( hypeData ) {
					return hypeData;
				});

				self.attachTemplate(); 
			});					
		} 
	};

	hypeM.init({
		template: $('#favorites-template').html(),
		container: $('.hypeResults'),
		username: 'clintonhalpin'
	});


})(jQuery);












