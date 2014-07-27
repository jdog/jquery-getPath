/*
	jQuery-GetPath v0.01, by Dave Cardwell. (2007-04-27)
	http://davecardwell.co.uk/javascript/jquery/plugins/jquery-getpath/
	Copyright (c)2007 Dave Cardwell. All rights reserved.
	Released under the MIT License.

	Modified by Justin Kempton
	http://github.com/jdog/jquery-getPath
	* added psuedo selectors to acquire input types
	* added name for form elements
	* simplified conditionals
	also released under the MIT License

	Usage:
	var path = $('#foo').getPath()

*/

jQuery.fn.extend({
	getPath: function( path ) {

		var dog = {
			  id   : undefined
			, css  : undefined
			, name : undefined
			, type : undefined
		}

		// The first time this function is called, path won't be defined
		if ( typeof path == 'undefined' ) path = ''

		// If this element is <html> we've reached the end of the path
		if ( this.is('html') )
			return 'html' + path

		// Add the element name
		var cur = this.get(0).nodeName.toLowerCase()

		// Determine the IDs and path
		dog.id   = this.attr('id')
		dog.css  = this.attr('class')
		dog.name = this.attr('name')

		if ($(this).is(":radio"))    dog.type = ":radio"
		if ($(this).is(":text"))     dog.type = ":text"
		if ($(this).is(":checkbox")) dog.type = ":checkbox"

		// Add the #id if there is one
		if (dog.id)
			cur += '#' + id

		// Add any classes
		if (dog.css)
			cur += '.' + css.split(/[\s\n]+/).join('.')

		if (dog.type)
			cur += dog.type

		if (dog.name)
			cur += "[name='" + dog.name + "']"

		// Recurse up the DOM
		return this.parent().getPath( ' > ' + cur + path )
	}
})
