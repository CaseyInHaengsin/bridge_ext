function onElementRendered(selector, cb, _attempts) {
  var el = $(selector);
  _attempts = ++_attempts || 1;
  if (el.length) return cb(el);
  if (_attempts == 60) return;
  setTimeout(function() {
    onElementRendered(selector, cb, _attempts);
  }, 250);
};


$(document).ready(function() {
  onElementRendered('#buc-header-nav', function(e) {
    $('#buc-header-nav').parent().prepend('<div id="enhancement_banner" class="BAT"><span id="title"> Enhancements Activated!</span></div>');
    $('#enhancement_banner').append('<div id="API_display"><pre>' + '</pre></div>');
  });

});
