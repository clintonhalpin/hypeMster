(function($) {

	var hypeM = {
		init: function( config ) {
			this.url = 'http://hypem.com/playlist/loved/clintonhalpin/json/1/data.json';
			this.template = config.template;
			this.container = config.container;
			this.fetch();
			this.bind();			
		},

		attachTemplate: function() {
			var template = Handlebars.compile( this.template );
			this.container.append( template( this.hypeData ) );
		},

		
		// bindEvents: function() {
		// 	this.searchInput.on( 'keyup', this.search );
		// },

		// search: function() {
		// 	var self = Twitter,
		// 		input = this;

		// 	clearTimeout( self.timer );

		// 	self.timer = ( input.value.length >= 3 ) && setTimeout(function() {
		// 		self.query = input.value;
		// 		$.publish( 'twitter/query' );
		// 	}, 400);
		// },

		bind: function() {
			$(".search-hypeM").on('keyup', function(e) {

			if (e.which == 13) {
				var value = $(this).val();
					getPizza(value);
				e.preventDefault();
				}
			});

			function getPizza(value){
			console.log(value);
			}

		},

		


		fetch: function() {
			var self = this;

			$.getJSON( this.url, function( data ) {
				self.hypeData = $.map( data, function( hypeData ) {
					return {
						mediaid: hypeData.mediaid,  
						artist: hypeData.artist,  
						title: hypeData.title,  
						dateposted: hypeData.dateposted,  
						siteid: hypeData.siteid, 
						sitename: hypeData.sitename, 
						posturl: hypeData.posturl, 
						postid: hypeData.postid, 
						loved_count: hypeData.loved_count, 
						posted_count: hypeData.posted_count, 
						thumb_url: hypeData.thumb_url, 
						thumb_url_medium: hypeData.thumb_url_medium, 
						thumb_url_large: hypeData.thumb_url_large, 
						thumb_url_artist: hypeData.thumb_url_artist, 
						time: hypeData.time, 
						description: hypeData.description,
						dateloved: hypeData.dateloved, 
						itunes_link: hypeData.itunes_link
					};
				});

				self.attachTemplate(); 
			});
		},
	};

	hypeM.init({
		template: $('#favorites-template').html(),
		container: $('.hypeData'),
		username: 'clintonhalpin'
	});

})(jQuery);









