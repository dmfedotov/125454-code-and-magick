'use strict';

(function () {
  var KeyCode = {
    ENTER: 13,
    ESC: 27
  };

  window.util = {
    isEscEvent: function (evt) {
      return evt.keyCode === KeyCode.ESC;
    },
    isEnterEvent: function (evt) {
      return evt.keyCode === KeyCode.ENTER;
    },
    getRandomNum: function (min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    }
  };
})();
