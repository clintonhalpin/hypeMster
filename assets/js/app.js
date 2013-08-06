(function($) {

	var hypeM = {

		init: function( config ) {
			this.url = 'http://hypem.com/playlist/loved/' + config.username + '/json/1/data.json';
			this.template = config.template;
			this.container = config.container;
			this.bindEvents();
			this.onLoad();

		},

		attachTemplate: function(hypeData) {
			var template = Handlebars.compile( this.template );

			// Empty the Container

			this.container.empty();
			
			// Append To Container

			this.container.append( template( this.hypeData ) );
		},


		onLoad: function() {
			
			var self = this,
				
				urlSearch = 'http://hypem.com/playlist/popular/3day/json/1/data.js';
				
			$.getJSON( urlSearch, function( data ) {
				self.hypeData = $.map( data, function( hypeData ) {
					attach(self.hypeData);		
				});
			});	

			function attach(data){
					self = this;
					
					var tmpl = $('#favorites-templateHome').html();

					var template = Handlebars.compile( tmpl );
					$('.hypeResults').empty();
					$('.hypeResults').append( template(self.data) );

					console.log(self.data);

					
			};	
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

				self.attachTemplate(this.template); 
			});					
		} 
	};

	hypeM.init({
		template: $('#favorites-template').html(),
		templateHome: $('#favorites-templateHome').html(),
		container: $('.hypeResults'),
		username: 'clintonhalpin'
	});


})(jQuery);












