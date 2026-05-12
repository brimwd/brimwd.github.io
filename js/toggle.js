$(document).ready(function() {
	$('.toggle a').on('click', function(){
		// short circuit
		if($(this).hasClass('active')) { return; }

		// set active
		$(this).parent().find('a').removeClass('active');

		// hide sibling content
		Array.from($(this).siblings()).forEach(function(link){
			$('[rel='+ link.classList +']').addClass('hidden');
		});

		// show selected content
		$('[rel='+ this.classList +']').removeClass('hidden');
		$(this).addClass('active');
	});
});
