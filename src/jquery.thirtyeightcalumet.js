/*
 * thirtyeightcalumet
 * http://thirtyeightcalumet.com
 *
 * Copyright (c) 2014 John Anderson
 * Licensed under the none license.
 */

(function($) {

  // Collection method.
  $.fn.thirtyeightcalumet = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.thirtyeightcalumet = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.thirtyeightcalumet.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.thirtyeightcalumet.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].thirtyeightcalumet = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
