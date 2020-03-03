$( document ).ready( function() {
  // ready
  window.setTimeout(function() {
    $('#dg-cta').addClass('pop');
    window.setTimeout(function() {
      $('#dg-cta').removeClass('pop');
    }, 1000);
  }, 800);

  // listeners
  $('#demo-trigger').on('click', function(){
    window.setTimeout(function() {
      $('body').removeClass().addClass('open');
    }, 300);
  });
  $('#captcha').on('click', function(){
    window.setTimeout(function() {
      $('#captcha').attr('src', 'images/captcha-checked.png').removeClass('required').addClass('dirty');
    }, 300);
  });
  $('a[href]').on('click', function(e){
    e.preventDefault();
  });
  $('.form-group, .form-row .col').on('keydown', 'input', function() {
    $(this).removeClass('required').addClass('dirty');
  });
  $('select').on('change', function() {
    $(this).removeClass('required').addClass('dirty');
  });
  $('#department').on('change', function() {
    $('#jobs optgroup').removeAttr('style');
    $('#jobs > option').prop('selected', true);
    var job = $(this).find('option:selected').attr('for');
    $('#'+job).show();
  });


  // submit
  $('.submit').on('click', function(){
    $('form').find('input[type="text"], select, img').toArray().forEach(function(el){
      if ($(el).hasClass('dirty')) return;
      else $(el).addClass('required');
    });
    if (!$('form').find('.required').toArray().length) {
      $('body').removeClass().addClass('prompt');
    }
  });

  // post-form-interstitial "Continue"
  $('.continue').on('click', function(){
    window.setTimeout(function() {
      $('body').removeClass().addClass('demo');
    }, 300);
  });
});
