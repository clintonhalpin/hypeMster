(function($) {

	window.hypeApp = {
		Models: {},
		Collections: {},
		Views: {}
	};

	hypeApp.init = function( config ){
		var self = this;
		self.username = config.username;
		console.log( self.username);
	};


	// Set Everything up
	
	hypeApp.init({
		template: $('#favorites-template').html(),
		container: $('.hypeResults'),
		username: 'clintonhalpin'
	});






	var hypeM = {

		init: function( config ) {
			this.template = config.template;
			this.container = config.container;
			this.bindEvents();
		},

		attachTemplate: function(hypeData) {
			var template = Handlebars.compile( this.template );

			this.container.empty();
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

		// onload: function() {
		// 	// var localStorage = localStorage.getItem('artistSearch');

		// 	if ( localStorage != undefined ) {
		// 		console.log(localStorage);
		// 	}
		// },

		// setLocal: function(v) {
		// 	localStorage.setItem('artistSearch',v);

		// 	var artistSearch = localStorage.getItem('artistSearch');
		// },
		
		fetch: function(value) {
			var self = this,
				v = encodeURIComponent(value.trim()),
				urlSearch = 'http://hypem.com/playlist/search/' + v + '/json/1/data.json';

			self.setLocal(v);

			$.getJSON( urlSearch, function( data ) {
				self.hypeData = $.map( data, function( hypeData ) {
					return {
						version: hypeData.version, mediaid: hypeData.mediaid,  artist: hypeData.artist,  title: hypeData.title,  dateposted: hypeData.dateposted,  siteid: hypeData.siteid, sitename: hypeData.sitename, posturl: hypeData.posturl, postid: hypeData.postid, loved_count: hypeData.loved_count, posted_count: hypeData.posted_count, thumb_url: hypeData.thumb_url, thumb_url_medium: hypeData.thumb_url_medium, thumb_url_large: hypeData.thumb_url_large, thumb_url_artist: hypeData.thumb_url_artist, time: hypeData.time, description: hypeData.description,dateloved: hypeData.dateloved, itunes_link: hypeData.itunes_link
					};
			});

			// var data = eval(myjson); // this will convert your json string to a javascript object

			// for (var key in data) {
			//     if (data.hasOwnProperty(key)) { 
			//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    for ( i = 0; key < i; key++) {
			//          console.log(key + key[i].artistname);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
			//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

			//     }
			// }         


			// for (var key in myjson) {
			// 	if (typeof myjson.[key] === 'number') {
			// 		console.log(key);
			// 	}
			// }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

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













