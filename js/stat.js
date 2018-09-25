'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_COLOR = '#fff';
  var SHADOW_SHIFT = 10;
  var SHADOW_X = CLOUD_X + SHADOW_SHIFT;
  var SHADOW_Y = CLOUD_Y + SHADOW_SHIFT;
  var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
  var GAP_X = 50;
  var GAP_Y = 10;
  var FONT_GAP = 20;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var BAR_COLOR = 'rgba(255, 0, 0, 1)';


  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    if (arr.length === 0) {
      return null;
    }

    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, SHADOW_X, SHADOW_Y, SHADOW_COLOR);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

    ctx.font = 'bold 16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillStyle = 'black';
    ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
    ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 2);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      var playerTime = Math.round(times[i]);
      var saturation = window.util.getRandomNum(10, 100);

      if (names[i] === 'Вы') {
        ctx.fillStyle = BAR_COLOR;
      } else {
        ctx.fillStyle = 'hsl(240, ' + saturation + '%' + ', 50%)';
      }

      ctx.fillRect(CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i, CLOUD_HEIGHT - FONT_GAP - GAP_Y, BAR_WIDTH, Math.round(-BAR_HEIGHT * times[i] / maxTime));
      ctx.fillStyle = 'black';
      ctx.fillText(names[i], CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i, CLOUD_HEIGHT - FONT_GAP);
      ctx.fillText(playerTime, CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i, CLOUD_HEIGHT - (FONT_GAP * 2) + Math.round(-BAR_HEIGHT * times[i] / maxTime) - GAP_Y);
    }
  };
})();
