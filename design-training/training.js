$(document).ready(function() {
/* SHOW MODAL */
  $('#auth').on('click',function(){
    $('#modal-container').removeClass('hidden').fadeIn();
    $('#reg-modal').focus();

    // bind 'return' key to sign in
    $(document).on('keypress', function(e){
      if (e.charKey === /*return*/) {
        $('#register').click();
      }
    });
  });

/* SIGN OUT */
  $('#sign-out').on('click',function(){
    /* REMOVE COOKIE */
  });

/* MODAL NAV */
  $('#reg-modal nav button').on('click',function(el){
    if($(el.target).hasClass('active')) {return;}

    $('#reg-modal nav button').removeClass('active');
    $(el.target).addClass('active');

    if($(el.target).attr('id') === 'join') {
      $('#register').text('Register');
    } else {
      $('#register').text('Sign In');
    }
  });

/* PROCESS REG / SIGN-IN */
  $('#register').on('click',function(el){
    const data = {
      username
    };
    if ($(el.target).hasClass('register')) {
      data.newUser = true;
    }
    /* SIGN IN */
    $.ajax({
      url: 'https://scheduleux.com/api/',
      data: data,
      dataType: 'json',
      success: function(response) {
        // hide modal
        $('#modal-container').fadeOut(function(){
          $('#modal-container').addClass('hidden');
        }, 'fast');

        /* render data  */
        $('body').addClass('registered');

        /* unbind 'return' key */
        $(document).off('keypress');
      },
      error: function(xhr, status, error) {
        console.log(xhr, status, error);
        $('#reg-modal').addClass('error');
      },
      type: 'POST'
    });
  });

});
