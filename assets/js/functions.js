(function($) {

	var hypeM = {
		init: function( config ) {
			this.url = 'http://hypem.com/playlist/loved/clintonhalpin/json/1/data.json';
			this.template = config.template;
			this.container = config.container;
			this.fetch();			
		},

		attachTemplate: function() {
			var template = Handlebars.compile( this.template );
			this.container.append( template( this.favorites ) );
			this.container.append( template( this.suggested ) );
		},

		
		bindEvents: function() {
			this.searchInput.on( 'keyup', this.search );
		},

		search: function() {
			var self = Twitter,
				input = this;

			clearTimeout( self.timer );

			self.timer = ( input.value.length >= 3 ) && setTimeout(function() {
				self.query = input.value;
				$.publish( 'twitter/query' );
			}, 400);
		},


		fetch: function() {
			var self = this;

			$.getJSON( this.url, function( data ) {
				self.favorites = $.map( data, function( favorite ) {
					return {
						mediaid: favorite.mediaid,  
						artist: favorite.artist,  
						title: favorite.title,  
						dateposted: favorite.dateposted,  
						siteid: favorite.siteid, 
						sitename: favorite.sitename, 
						posturl: favorite.posturl, 
						postid: favorite.postid, 
						loved_count: favorite.loved_count, 
						posted_count: favorite.posted_count, 
						thumb_url: favorite.thumb_url, 
						thumb_url_medium: favorite.thumb_url_medium, 
						thumb_url_large: favorite.thumb_url_large, 
						thumb_url_artist: favorite.thumb_url_artist, 
						time: favorite.time, 
						description: favorite.description,
						dateloved: favorite.dateloved, 
						itunes_link: favorite.itunes_link
					};
				});

				self.attachTemplate(); 
			});
		},
	};

	hypeM.init({
		template: $('#favorites-template').html(),
		container: $('#wrapper'),
		username: 'clintonhalpin'
	});

})(jQuery);







