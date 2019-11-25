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
  window.prevScrollPosition = window.scrollY;
  $('body').css('top', -window.scrollY).addClass('dynamicLoad');
  $('body').prepend($('<section id="dynamicLoad" style="display:none;">').html(pageHTML));
  $('#dynamicLoad script#case-study-page, #dynamicLoad title, #dynamicLoad meta').remove();
  $('#dynamicLoad').fadeIn();
  $('#dynamicLoad, #dismissCaseStudy').on('click', function (el) {
    // short circuit if not clicking on overlay or (X)
    if ($(el.target).attr('id') != 'dynamicLoad') { return; }

    window.history.replaceState(undefined, undefined, '/index.html');
    $('body').removeClass('dynamicLoad').removeAttr('style');
    window.scrollY = window.prevScrollPosition;
    $('#dynamicLoad').fadeOut(function(){
      $('#dynamicLoad').remove();
    });
  });
}
