(function flagBroken () {
	$('head').append('<style type="text/css" for="flag-broken-links">a[href=""], a:not([href]) {color:red!important;font-family:monospace!important;font-weight:regular!important;}</style>');
	window.FlagBrokenLinks = true;
	console.log('broken links flagged');
})();
