(function($) {

	var hypeM = {
		init: function( config ) {
			this.url = 'http://hypem.com/playlist/loved/' + config.username + '/json/1/data.json';
			this.template = config.template;
			this.container = config.container;
			this.fetch();
			this.bindEvents();			
		},

		attachTemplate: function() {
			var template = Handlebars.compile( this.template );
			this.container.append( template( this.hypeData ) );
		},

		
		bindEvents: function() {
			$(".search-hypeM").on( 'keyup', this.search );


		},

		search: function(e) {
			var self = hypeM,
				input = this;

				if (e.which == 13) {
					var value = $(this).val();
						self.fetch(value);
				}
			e.preventDefault();
		},

		fetch: function(value) {
			var self = this;

			var value = 'anthony';

			var url = 'http://hypem.com/playlist/loved/' + value + '/json/1/data.json';

		

			$.getJSON( this.url, function( data ) {
				self.hypeData = $.map( data, function( hypeData ) {
					return {
						mediaid: hypeData.mediaid,  artist: hypeData.artist,  title: hypeData.title,  dateposted: hypeData.dateposted,  siteid: hypeData.siteid, sitename: hypeData.sitename, posturl: hypeData.posturl, postid: hypeData.postid, loved_count: hypeData.loved_count, posted_count: hypeData.posted_count, thumb_url: hypeData.thumb_url, thumb_url_medium: hypeData.thumb_url_medium, thumb_url_large: hypeData.thumb_url_large, thumb_url_artist: hypeData.thumb_url_artist, time: hypeData.time, description: hypeData.description,dateloved: hypeData.dateloved, itunes_link: hypeData.itunes_link
					};
				});

				self.attachTemplate(); 
			});
		},
	};

	hypeM.init({
		template: $('#favorites-template').html(),
		container: $('.hypeData'),
		username: 'anthony'
	});

})(jQuery);









