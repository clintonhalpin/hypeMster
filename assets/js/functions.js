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
			
			// Compile the Container

			this.container.append( template( this.hypeData ) );
		},

		bindEvents: function() {
			var self = hypeM;

			$(".search-hypeM").keydown(function(e) {
				if (e.which == 13) {
					var value = $(this).val();
					self.fetch(value);
					return false;
				}
			});
		},
		
		fetch: function(value) {
			var self = this,
				v = encodeURIComponent(value.trim()),
				urlUsername = 'http://hypem.com/playlist/loved/' + v + '/json/1/data.json',
				urlSearch = 'http://hypem.com/playlist/search/' + v + '/json/1/data.json';

			$.getJSON( urlSearch, function( data ) {
				self.hypeData = $.map( data, function( hypeData ) {
					return {
						version: hypeData.version, mediaid: hypeData.mediaid,  artist: hypeData.artist,  title: hypeData.title,  dateposted: hypeData.dateposted,  siteid: hypeData.siteid, sitename: hypeData.sitename, posturl: hypeData.posturl, postid: hypeData.postid, loved_count: hypeData.loved_count, posted_count: hypeData.posted_count, thumb_url: hypeData.thumb_url, thumb_url_medium: hypeData.thumb_url_medium, thumb_url_large: hypeData.thumb_url_large, thumb_url_artist: hypeData.thumb_url_artist, time: hypeData.time, description: hypeData.description,dateloved: hypeData.dateloved, itunes_link: hypeData.itunes_link
					};
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









