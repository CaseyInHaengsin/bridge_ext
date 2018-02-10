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
  $('#showEnhance').click(function(e) {
    e.preventDefault();
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {req:"showBAT"}, function(response) {
        console.log(response);
      });
    });
  });
  $('#apiRequest').click(function(e){
    e.preventDefault();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var dataForAPI = {
        req: "apiReq",
        path: $('#apiPath').val(),
      };
      chrome.tabs.sendMessage(tabs[0].id, dataForAPI, function(response) {
        console.log(response);
      });
    });
  });
});