	<script id="favorites-template" type="text/x-handlebars-template">
		{{#each this}}
			<div class="media">
				<a href="http://hypem.com/track/{{mediaid}}" class="img">
					<img src="{{thumb_url_medium}}" alt="{{artist}}">
				</a>

				<div class="bd">
					<h1>{{artist}} - {{title}}</h1>
					
				</div>

			</div>

		{{/each}}
	</script>	

