'use strict';

(function () {
  var setupElement = document.querySelector('.setup');
  var uploadElement = setupElement.querySelector('.upload');

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
}());
