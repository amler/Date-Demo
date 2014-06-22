"use strict";

//Parse Object constructor
App.Objects.Photo = Parse.Object.extend({
	className: 'Photo'
});
 
//Collection Constructor
App.Collections.PhotoCollection = Parse.Collection.extend({
	model: App.Objects.Photo,
});