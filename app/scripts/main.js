"use strict";

 
var mySite = new App.Views.SiteView();


$('.add-button').click(function() {	
	var fileUploadControl = $('.url-input')[0];
	// console.log(fileUploadControl.files.length);
	if (fileUploadControl.files.length > 0) {
		var file = fileUploadControl.files[0];
		var name = 'photo.jpg';
		var parseFile = new Parse.File(name, file);
		var captionValue = $('.caption-input').val();
		var nameValue = $('.name-input').val();
	}
					// done
	parseFile.save().then(function() {
	// The file has been saved to Parse.
	    

		var photo = new App.Objects.Photo();
		photo.set('caption', captionValue);
		photo.set('photoName', nameValue);
		photo.set('photoRef', parseFile);
		photo.set('photoURL', parseFile.url());
		// console.log(parseFile);
		photo.save().done(function(){
		   	mySite.collection.add(photo);
		})
	    
	}, function(error) {
	// The file either could not be read, or could not be saved to Parse.
	    alert('Failed to create new object, with error code: ' + error.description);
	});
});
