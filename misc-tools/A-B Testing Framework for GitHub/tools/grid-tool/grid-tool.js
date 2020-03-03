// Get parameters from url query string
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// If url query string contains 'grid=true', init grid-tool
if ( getUrlParameter('grid') === 'true' ) {

  // Append grid-tool container to end of <body>
  $( 'body' ).append( '<div id="grid-tool"></div>' );

  // Load grid-tool html into container
  $( '#grid-tool' ).load( './tools/grid-tool/grid-tool.html', function () {

    // If sessionStorage rows="true", display row borders
    if ( sessionStorage.getItem( 'rows' ) === 'true' ) {
      $( '.row' ).addClass( 'grid-row-border' );
    }

    // If sessionStorage cols="true", display col borders
    if ( sessionStorage.getItem( 'cols' ) === 'true' ) {
      $( '.col' ).addClass( 'grid-col-border' );
    }

    // If sessionStorage grid="true", display grid overlay
    if ( sessionStorage.getItem( 'grid' ) === 'true' ) {
      $( '.grid-tool-overlay' ).addClass( 'grid-visible' );
    }

    // If sessionStorage all="true", set change button label
    if ( sessionStorage.getItem( 'all' ) === 'true' ) {
      $( '#grid-tool button[name="all"]' ).html( 'All off' );
    }

    // On click all button, toggle all features and set sessionStorage
    $( '#grid-tool button[name="all"]' ).on( 'click', function () {

      if ( sessionStorage.getItem( 'all' ) === 'false' || sessionStorage.getItem( 'all' ) === null ) {

        $( this ).html( 'All off' );
        $( '.row' ).addClass( 'grid-row-border' );
        $( '.col' ).addClass( 'grid-col-border' );
        $( '.grid-tool-overlay' ).addClass( 'grid-visible' );
        sessionStorage.setItem( 'rows', 'true' );
        sessionStorage.setItem( 'cols', 'true' );
        sessionStorage.setItem( 'grid', 'true' );
        sessionStorage.setItem( 'all', 'true' );

      } else {

        $( this ).html( 'All on' );
        $( '.row' ).removeClass( 'grid-row-border' );
        $( '.col' ).removeClass( 'grid-col-border' );
        $( '.grid-tool-overlay' ).removeClass( 'grid-visible' );
        sessionStorage.setItem( 'rows', 'false' );
        sessionStorage.setItem( 'cols', 'false' );
        sessionStorage.setItem( 'grid', 'false' );
        sessionStorage.setItem( 'all', 'false' );

      }

    } );

    // On click rows button, toggle row borders and set sessionStorage
    $( '#grid-tool button[name="rows"]' ).on( 'click', function () {

      $( '.row' ).toggleClass( 'grid-row-border' );

      if ( sessionStorage.getItem( 'rows' ) === 'false' || sessionStorage.getItem( 'rows' ) === null ) {
        sessionStorage.setItem( 'rows', 'true' );
      } else {
        sessionStorage.setItem( 'rows', 'false' );
      }

    } );

    // On click cols button, toggle col borders and set sessionStorage
    $( '#grid-tool button[name="cols"]' ).on( 'click', function () {

      $( '.col' ).toggleClass( 'grid-col-border' );

      if ( sessionStorage.getItem( 'cols' ) === 'false' || sessionStorage.getItem( 'cols' ) === null ) {
        sessionStorage.setItem( 'cols', 'true' );
      } else {
        sessionStorage.setItem( 'cols', 'false' );
      }

    } );

    // On click grid button, toggle grid overlay and set sessionStorage
    $( '#grid-tool button[name="grid"]' ).on( 'click', function () {

      $( '.grid-tool-overlay' ).toggleClass( 'grid-visible' );

      if ( sessionStorage.getItem( 'grid' ) === 'false' || sessionStorage.getItem( 'grid' ) === null ) {
        sessionStorage.setItem( 'grid', 'true' );
      } else {
        sessionStorage.setItem( 'grid', 'false' );
      }

    } );

  } );

}
