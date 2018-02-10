function getCompleted(status, cb, failcb, _attempts) {
  var prom = status;
  _attempts = ++_attempts || 1;
  console.log(prom, _attempts);
  if (prom.readyState == 4) return cb(prom.responseJSON);
  if (_attempts == 60) return failcb();
  setTimeout(function() {
    getCompleted(status, cb, failcb, _attempts);
  }, 250);
};
let accountSettings = $.get('/api/admin/account_configs/current');

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request, sender, sendResponse);
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

let hideBat = function() {
  $('.BAT').hide();
};

let showBat = function() {
  $('.BAT').show();
};

let displayCall = (pathName)=>{
  return new Promise((res,rej)=>{
    let promiseState = $.get(pathName);
    getCompleted(promiseState,(data)=>{
      res(data);
    },()=>{rej('Promise Rejected: something went wrong with the promise call')});
  });
}
/*
This call will be added once the interface is built to include a string to search by - Quick API
//   displayCall('/api/admin/account_configs/current').then((data)=>{
//     console.log(data);
//   }).catch((err)=>{console.log(err)});
*/