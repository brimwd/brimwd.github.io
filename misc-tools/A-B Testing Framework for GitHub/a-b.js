$(document).ready(function() {
  // short-circuit if no variations configured
  if (variations.length === 0 || variations[0].version === undefined) {return;}

  // add version-picker nav
  $('body').prepend($('<nav id="version-picker" class="row"><b>Version</b></nav>'));

  generateLinks();

  // set initial state
  $($('#version-picker a')[0]).click();
});

function generateLinks () {
  // generate links
  for(var i = 0 ; i < variations.length ; i++) {
    $('#version-picker').append($('<a rel="'+i+'">'+(i+1)+'</a>'));
  }

  // bind clicks
  $('#version-picker').on('click', 'a', function() {
    if ($(this).hasClass('active-version')) {return;}

    updateVariation($(this).attr('rel'));

    // update 'active' link
    $(this).siblings().removeClass().end().addClass('active-version');
  });
}

function updateVariation (linkNumber) {
  $.ajax({
    url: 'https://raw.githubusercontent.com/servicenow-digital/testing-framework/'+variations[linkNumber].version+'/branch-content/main.html?token='+variations[linkNumber].token,
    context: document.getElementById('variation-content'),
    success: function(data) {
      $(this).html(data);
    }
  });
}
