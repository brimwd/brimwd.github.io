$(document).ready(function() {
  var targetPage;
  var targetPageLoaded;


  $('#sort-by').on('click', function(){
    var sortLink = $(this);

    // toggle string
    $($('#sort-by').find('span.'+sortLink.data('value'))).addClass('hidden').siblings('span').removeClass('hidden');

    if(sortLink.data('value') === 'phase') { // sort by date
      $(sortLink.find('i')).removeClass('fa-th').addClass('fa-stream');
      sortLink.data('value', 'date');
      $('.alert').hide();
    } else { // sort by phase
      $(sortLink.find('i')).removeClass('fa-stream').addClass('fa-th');
      sortLink.data('value', 'phase');
      $('.alert').fadeIn();
    }

    $('.flex-grid.phase, .flex-grid.date').removeClass().addClass('flex-grid '+sortLink.data('value'));
  });


  $('a.dynamicLoad').on('click', function(event){
    // if attempting to open in new tab with CMD key
    if (event.metaKey) {return;}

    // stop the link from firing
    event.preventDefault();
    // assign vars
    targetPage = $(event.target).closest('a').attr('href');

    /*if ($('.flex-grid').hasClass('phase')) {
      // get relative position of click
      var relativePosition = {
        left: event.pageX - $(document).scrollLeft() - $('.flex-grid a').offset().left,
        top : event.pageY - $(document).scrollTop() - $('.flex-grid a').offset().top
      };

      // console.log(relativePosition.left + ', ' + relativePosition.top);
    }*/

    // will come back from the ajax call as TRUE if succeeded or FALSE if failed
    getPage(targetPage, $(this).attr('title'), 1);
  });

  // load deep-link content
  if (window.location.hash != '') { getPage(window.location.hash.slice(1), 1);}
});

function getPage (pageName, title, attempts) {
  // retrieve page from server
  $.ajax({
    url: pageName,
    success: function(response) {
      window.openPage = pageName;
      // renders the new content
      renderPage(response);

      // Support for deep-linking
      history.pushState(undefined, 'Brian Donahue\'s '+title, '#'+pageName);

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
  adjustOffset();

  $('body').addClass('dynamicLoad').prepend($('<section id="dynamicLoad" style="display:none;">').html(pageHTML));
  $('body').on('touchmove', function(e) {e.preventDefault();});
  $('#dynamicLoad script#case-study-page, #dynamicLoad title, #dynamicLoad meta').remove();
  $('#dynamicLoad').append($('<a id="dismiss"><span>Close Case Study</span></a>'));
  $('#dynamicLoad').fadeIn();
    window.scrollTo(10, 0);
  $('#dynamicLoad').on('click', function (el) {
    // short circuit if not clicking on overlay or (X)
    if ($(el.target).attr('id') != 'dynamicLoad' && $(el.target).attr('id') != 'dismiss' && $(el.target).parent().attr('id') != 'dismiss' ) { return; }

    // TODO: Fix this
    // remove history state
    window.history.replaceState(undefined, undefined, '/index.html');
    window.location.hash = '';

    // reset body and remove dynamic content
    $('body').removeAttr('style class');
    window.scrollTo(10, window.prevScrollPosition);
    $('#dynamicLoad').fadeOut(function(){
      $('#dynamicLoad').remove();
      $('body').off('touchmove', function(e) {e.preventDefault();});
    });
  });
}

var resize;

$(window).on('resize', function(){
  clearTimeout(resize);

  resize = setTimeout(function(){
    if ($(this).hasClass('dynamicLoad')) {
      adjustOffset();
    }
  }, 50);

  if (window.innerWidth < 670) {
    if ($('#sort-by').data('value') === 'phase') {
      $($('#sort-by').find('span.date')).removeClass('hidden').siblings('span').addClass('hidden');
      $($('#sort-by').find('i')).removeClass('fa-sort-shapes-down-alt').addClass('fa-sort-shapes-up-alt');
      $('#sort-by').data('value', 'date');
      $('.alert').hide();
      $('.flex-grid.phase').removeClass('phase').addClass('date');
    }
  }
});

function adjustOffset() {
  if (window.innerWidth >= 860) {
    window.prevScrollPosition = window.pageYOffset;
    $('body').attr('style', ('margin-top:' + -window.pageYOffset + 'px;max-height:calc(100vh + ' + window.pageYOffset + 'px)'));
  } else {
    $('body').removeAttr('style');
  }
}
