(function assessClassNamingEfficiency (minifiedClassLength) {
	var minifiedLength = minifiedClassLength ? minifiedClassLength : 3;
	var domClasses = $('[class]:not([class=""])').toArray().map(function(el) {
			return $(el).attr('class').split(' ');
		}).flat().sort();
	var counts = {};
	var uniqueClasses;

	domClasses.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
	uniqueClasses = Object.getOwnPropertyNames(counts);

	characterSavings = domClasses.reduce(function(previous, current) {
		return previous + (current.length - minifiedLength);
	}, 0);

	$('#namingEfficiencyResults').remove();
	$('body').prepend($('<article id="namingEfficiencyResults" style="margin-bottom:100px;padding:100px;">')
		.append($('<p>').html("<b>Total class names: </b>" + domClasses.length))
		.append($('<p>').html("<b>Unique class names: </b>" + uniqueClasses.length))
		.append($('<p>').html("<i>Assuming class names are minified to </i> " + minifiedLength + " <i>characters.</i>"))
		.append($('<p>').html("<i>Change length assumption in the last line of this script.</i>"))
		.append($('<p>').html("<b>Minification savings: </b>" + characterSavings))
		.append($('<p>').html("<b>All class names:</b><br />" + uniqueClasses.join(', '))));
})(3);
