# flag-broken-links.js
#### Written for ServiceNow by Brian Donahue in November 2019

## Overview
This tool simply finds all of the links with an empty or missing `href` attribute and colors them red so they'll stand out.

## Reset
Refresh the page or enter this function to reset:
```
(function unflagBroken () {
	$('[for="flag-broken-links"]').remove();
	window.FlagBrokenLinks = false;
	console.log('broken links unflagged');
})();
```
