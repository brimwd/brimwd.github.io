(function unflagBroken () {
	$('[for="flag-broken-links"]').remove();
	window.FlagBrokenLinks = false;
	console.log('broken links unflagged');
})();
