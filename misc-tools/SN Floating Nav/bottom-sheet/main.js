$( document ).ready( function() {
  $('#trigger').on('click', function(){
    $('#bottom-sheet').addClass('visible');
  });

  $('#overlay, #dismiss').on('click', function(){
    $('#bottom-sheet').removeClass('visible');
    resetForms();
  });

  /* LOCATIONS */
  // $('.locationsTrigger').on('click', function(){
  //   $('#bottomSheetLinks').slideUp();
  //   $('#locations').slideDown();
  // });
  // $('#dismissLocations').on('click', function(){
  //   $('#locations').slideUp();
  //   $('#bottomSheetLinks').slideDown();
  // });

  /* FORMS */
  $('.formTrigger').on('click', function(){
    var form = $('#'+$(this).attr('rel'));
    form.show();
    $('#dismissForm span').text(form.attr('title'))
    $('#forms').addClass('visible');
  });
  $('#dismissForm').on('click', function(){
    resetForms();
  });
// END READY FUNCTION
});

function resetForms () {
  $('#forms').removeClass('visible');
  $('#forms form').fadeOut('slow');
}
