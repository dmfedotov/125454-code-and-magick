'use strict';

(function () {
  var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';
  var URL_SAVE = 'https://js.dump.academy/code-and-magick';
  var TIMEOUT = 10000;
  var CODE_SUCCESS = 200;

  var checkStatus = function (xhr, success, error) {
    xhr.addEventListener('load', function () {
      if (xhr.status === CODE_SUCCESS) {
        success(xhr.response);
      } else {
        error('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }

      xhr.addEventListener('error', function () {
        error('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        error('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });
    });
  };

  window.load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    checkStatus(xhr, onLoad, onError);
    xhr.timeout = TIMEOUT;

    xhr.open('GET', URL_LOAD);
    xhr.send();
  };

  window.save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    checkStatus(xhr, onLoad, onError);
    xhr.timeout = TIMEOUT;

    xhr.open('POST', URL_SAVE);
    xhr.send(data);
  };
})();
