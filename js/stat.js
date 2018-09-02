'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 270;
var GAP_X = 50;
var GAP_Y = 10;
var GAP_TOP = 90;
var FONT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_COLOR = 'rgba(255, 0, 0, 1)';
var barHeight = CLOUD_Y - GAP_Y - FONT_GAP - GAP_TOP;


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
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.font = 'bold 16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var playerTime = Math.round(times[i]);

    if (names[i] === 'Вы') {
      ctx.fillStyle = BAR_COLOR;
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.round(Math.random() * 100) + '%' + ', 50%)';
    }

    ctx.fillRect(CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i, CLOUD_Y - FONT_GAP - GAP_Y, BAR_WIDTH, Math.round(-barHeight * times[i] / maxTime));
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i, CLOUD_Y - FONT_GAP);
    ctx.fillText(playerTime, CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i, CLOUD_Y - (FONT_GAP * 2) + Math.round(-barHeight * times[i] / maxTime) - GAP_Y);
  }
};
