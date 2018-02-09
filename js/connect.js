chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request, sender, sendResponse);
    /*console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");*/
    switch (request.req) {
      case 'hideBAT':
        hideBat();
        break;
      case 'showBAT':
        showBat();
        break;
    }
  return true; // This is needed to allow for asynchronous responses via sendResponse
});

var hideBat = function() {
  $('.BAT').hide();
};

var showBat = function() {
  $('.BAT').show();
};