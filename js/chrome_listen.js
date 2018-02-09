$(document).ready(function(){
  $('#hideEnhance').click(function(e) {
    e.preventDefault();
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {req:"hideBAT"}, function(response) {
        console.log(response);
      });
    });
  });
});