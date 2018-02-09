// When the extension is installed or upgraded ...
//
//
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([{
      // That fires when a page's URL contains a 'g' ...
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
            hostSuffix: 'bridgeapp.com',
          },
        })
      ],
      // And shows the extension's page action.
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

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