$( document ).ready( function() {
  $('#speedDialTrigger').on('click', function(){
    if ($(this).parent().hasClass('open')) {
      // close speed dial
      $('#speedDial').removeClass('open');
      $('#speedDialTrigger > i').removeClass('fa-times').addClass('fa-plus');
      $('#speedDial li').removeClass('show');
      return;
    }

    $(this).parent().addClass('open');
    $('#speedDial li').toArray().reverse().forEach(function(li, i) {
      window.setTimeout(function(){
        $(li).addClass('show');
      }, (i+1)*30 );
    });
    $('#speedDialTrigger > i').removeClass('fa-plus').addClass('fa-times');
  });

  $('.formTrigger').on('click', function(){
    var form = $('#'+$(this).attr('rel'));
    form.show();
    $('#bottom-sheet').addClass('visible');
  });

  $('#overlay, #dismiss').on('click', function(){
    if ($('#speedDial').hasClass('open')) {
      $('#speedDialTrigger').click();
    }
    $('#forms form').fadeOut('slow');
    $('#bottom-sheet').removeClass('visible');
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


// END READY FUNCTION
});
