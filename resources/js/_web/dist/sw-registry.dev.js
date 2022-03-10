"use strict";

// FILE PATH: /resources/js/sw-registry.js
// (optional) If you using firebase notification
// import { messaging } from 'firebase';
var newWorker; // Notify user if service worker file has changed.. and need to update
// in your blade file create this snippet for notification for example
//
// <div id="sw-snackbar">A new version of this app is available. Click <a id="reload">here</a> to update.</div>
//

function showUpdateBar() {
  var snackbar = document.getElementById('sw-snackbar');
  snackbar.className = 'show';
} // document.getElementById('reload').addEventListener('click', function(){
//     newWorker.postMessage({ action: 'skipWaiting' });
// });


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').then(function (reg) {
      reg.addEventListener('updatefound', function () {
        newWorker = reg.installing;
        newWorker.addEventListener('statechange', function () {
          switch (newWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                // Show update bar
                showUpdateBar();
              }

              break;
          }
        });
      });
    })["catch"](function (err) {
      console.log('ServiceWorker registration failed: ', err);
    });
    var refreshing;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (refreshing) return;
      window.location.reload();
      refreshing = true;
    });
  });
}