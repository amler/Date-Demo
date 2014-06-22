"use strict";
 
// Individual Thumbnail View - many many instances
App.Views.ThumbView = Parse.View.extend({
	template: _.template($(".thumb-view-template").text()),
 
	className: "thumb-container",
 
	initialize: function () {
		$(".container").append(this.el);
		this.render();
	},
 
	render: function () {
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	}
});
 
 
 
// Full App View // only 1 instance
App.Views.SiteView = Parse.View.extend({

	initialize: function () {
		this.collection = new App.Collections.PhotoCollection()
		this.collection.fetch({add: true})
		this.collection.on("add", function (photo) {
			new App.Views.ThumbView({model: photo});
		});
 
	},
 
})