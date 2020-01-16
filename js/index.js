$(document).ready(function() {
  var targetPage;
  var targetPageLoaded;


  $('a.dynamicLoad').on('click', function(event){
    // stop the link from firing
    event.preventDefault();

    // assign vars
    targetPage = $(event.target).closest('a').attr('href');

    // will come back from the ajax call as TRUE if succeeded or FALSE if failed
    getPage(targetPage, 1);
  });

  // load deep-link content
  if (window.location.hash != '') { getPage(window.location.hash.slice(1), 1);}
});

function getPage (pageName, attempts) {
  // retrieve page from server
  $.ajax({
    url: pageName,
    success: function(response) {
      window.openPage = pageName;
      // renders the new content
      renderPage(response);

      // Support for deep-linking
      history.pushState(undefined, undefined, '#'+pageName);

    },
    error: function(xhr, status, error) {
      console.log(xhr, status, error);
      if (attempts === 1) getPage(pageName, 2); // try again
      else location.assign(pageName+'#dynamicLoadFailed'); // failed twice - redirect to selected page
    },
    type: 'GET'
  });
}

function renderPage (pageHTML) {
  // minimize nav
  // create content section
  // populate content section
  window.prevScrollPosition = window.pageYOffset;
  $('body').attr('style', ('margin-top:' + -window.pageYOffset + 'px;max-height:calc(100vh + ' + window.pageYOffset + 'px)')).addClass('dynamicLoad');
  $('body').prepend($('<section id="dynamicLoad" style="display:none;">').html(pageHTML));
  $('#dynamicLoad script#case-study-page, #dynamicLoad title, #dynamicLoad meta').remove();
  $('#dynamicLoad').append($('<a id="dismiss"><span>Close Case Study</span></a>'));
  $('#dynamicLoad').fadeIn();
  $('#dynamicLoad').on('click', function (el) {
    // short circuit if not clicking on overlay or (X)
    if ($(el.target).attr('id') != 'dynamicLoad' && $(el.target).attr('id') != 'dismiss' && $(el.target).parent().attr('id') != 'dismiss' ) { return; }

    // remove history state
    window.history.replaceState(undefined, undefined, '/index.html');
    window.location.hash = '';

    // reset body and remove dynamic content
    $('body').removeAttr('style, class');
    window.scrollTo(0, window.prevScrollPosition);
    $('#dynamicLoad').fadeOut(function(){
      $('#dynamicLoad').remove();
    });
  });
}
