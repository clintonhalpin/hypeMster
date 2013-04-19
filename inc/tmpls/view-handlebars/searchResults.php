	<script id="favorites-template" type="text/x-handlebars-template">
		{{#each this}}
			<div class="hypeItem">
				<a href="http://hypem.com/track/{{mediaid}}" target="_blank">
					<img src="{{thumb_url_medium}}">

					<div class="ItemMeta">
						<h1>{{artist}}</h1>
						<h2>{{title}}</h2>
					</div>
				</a>

			</div>
		{{/each}}
	</script>	