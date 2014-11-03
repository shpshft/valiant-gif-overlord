(function($) {

  'use strict';

  var getTrending = $.getJSON('http://api.giphy.com/v1/gifs/trending?rating=g&limit=1&api_key=dc6zaTOxFJmzC')

    .done(function(data) {
      $('.trending-gifs .constrained').prepend('<h1>Trending</h1>');
      var trending = [];
      var trendingItem = false;
      $.each( data.data, function( key, gif ) {
        trending.push( '<img data-static="' + gif.images.fixed_height_still.url + '" data-animated="' + gif.images.fixed_height.url + '" src="' + gif.images.fixed_height.url + '" alt="' + gif.caption + '">' );
        trendingItem = $( "<li/>", {
          "class" : "featured-item _" + key,
          "id"    : gif.id,
          html    : trending[key]
        }).appendTo( '.trending-items' );
      });
    });


  getTrending = $.getJSON('http://api.giphy.com/v1/gifs/trending?rating=g&offset=1&limit=24&api_key=dc6zaTOxFJmzC')

    .done(function(data) {
      var trending = [];
      var trendingItem = false;
      $.each( data.data, function( key, gif ) {
        trending.push( '<img data-static="' + gif.images.fixed_height_still.url + '" data-animated="' + gif.images.fixed_height.url + '" src="' + gif.images.fixed_height.url + '" alt="' + gif.caption + '">' );
        trendingItem = $( "<li/>", {
          "class" : "trending-item _" + key,
          "id"    : gif.id,
          html    : trending[key]
        }).appendTo( '.trending-items' );
      });

      // Use List.js to search the gifs
      // var trendingSearch = new List( '.trending-items', {
      //   valueNames: [] // currently, no data of searchable value is being served by the Giphy API
      // } )
    })

    .fail(function() {
      $('.trending-gifs .constrained').prepend('<h2><em>Oh no! No gifs!</em>The emergency meme-team is working on it!<a class="button" onClick="document.location.reload(true)">Try again?</a></h2>');
    });

}(window.jQuery));