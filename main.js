// http://hypem.com/playlist/feed/clintonhalpin/json/1/data.js	

// http://hypem.com/playlist/history/clintonhalpin/json/1/data.js

// http://hypem.com/playlist/search/outkast/json/1/data.js

(function() {

	var HypeM = {
		init: function( config ) {
			this.url = 'http://hypem.com/playlist/loved/' + config.username + '/json/1/data.js';
			this.template = config.template;
			this.container = config.container;
			this.fetch();
		},

		attachTemplate: function() {
			var template = Handlebars.compile( this.template );
			this.container.append( template( this.favorites ) );
		},

		fetch: function() {
			var self = this;

			$.getJSON( this.url, function( data ) {
				self.favorites = $.map( data, function( favorite ) {
					return {
						author: favorite.artist,
						favorite: favorite.artist,
						thumb: favorite.thumb_url_large,
						url: favorite.posturl
					};
				});
				self.attachTemplate(); 
			});
		}
	};

	HypeM.init({
		template: $('#favorites-template').html(),
		container: $('#wrapper'),
		username: 'clintonhalpin'
	});

})();