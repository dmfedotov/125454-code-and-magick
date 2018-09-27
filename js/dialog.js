'use strict';

(function () {
  var setupElement = document.querySelector('.setup');
  var setupOpenElement = document.querySelector('.setup-open');
  var setupCloseElement = setupElement.querySelector('.setup-close');
  var inputUserNameElement = setupElement.querySelector('.setup-user-name');
  var uploadElement = setupElement.querySelector('.upload');
  var form = setupElement.querySelector('.setup-wizard-form');

  var openPopup = function () {
    setupElement.classList.remove('hidden');
    document.addEventListener('keydown', onEscPress);
  };

  var closePopup = function () {
    setupElement.style = '';
    setupElement.classList.add('hidden');
    document.removeEventListener('keydown', onEscPress);
  };

  var onEscPress = function (evt) {
    if (window.util.isEscEvent(evt) && evt.target !== inputUserNameElement) {
      closePopup();
    }
  };

  setupOpenElement.addEventListener('click', openPopup);

  setupOpenElement.addEventListener('keydown', function (evt) {
    if (window.util.isEnterEvent(evt)) {
      openPopup();
    }
  });

  setupCloseElement.addEventListener('click', closePopup);

  setupCloseElement.addEventListener('keydown', function (evt) {
    if (window.util.isEnterEvent(evt)) {
      closePopup();
    }
  });

  uploadElement.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoord = {
      x: evt.clientX,
      y: evt.clientY
    };

    var isDragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      isDragged = true;

      var shift = {
        x: startCoord.x - moveEvt.clientX,
        y: startCoord.y - moveEvt.clientY
      };

      startCoord.x = moveEvt.clientX;
      startCoord.y = moveEvt.clientY;

      setupElement.style.top = (setupElement.offsetTop - shift.y) + 'px';
      setupElement.style.left = (setupElement.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (isDragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          uploadElement.removeEventListener('click', onClickPreventDefault);
        };
        uploadElement.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), closePopup, window.onError);
    evt.preventDefault();
  });
}());
