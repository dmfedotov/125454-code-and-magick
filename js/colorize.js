'use strict';

(function () {
  var setupElement = document.querySelector('.setup');
  var setupWizardElement = setupElement.querySelector('.setup-wizard');
  var wizardCoatElement = setupWizardElement.querySelector('.setup-wizard .wizard-coat');
  var wizardEyesElement = setupWizardElement.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireballElement = setupElement.querySelector('.setup-fireball-wrap');

  var changeCoatColor = function () {
    var coatColorIndex = window.util.getRandomNum(0, window.setup.wizardParameter.COAT_COLORS.length - 1);
    wizardCoatElement.style.fill = window.setup.wizardParameter.COAT_COLORS[coatColorIndex];
    setupElement.querySelector('input[name="coat-color"]').value = wizardCoatElement.style.fill;
  };

  var changeEyesColor = function () {
    var eyesColorIndex = window.util.getRandomNum(0, window.setup.wizardParameter.EYES_COLORS.length - 1);
    wizardEyesElement.style.fill = window.setup.wizardParameter.EYES_COLORS[eyesColorIndex];
    setupElement.querySelector('input[name="eyes-color"]').value = wizardEyesElement.style.fill;
  };

  var changeFireballColor = function () {
    var fireballColorIndex = window.util.getRandomNum(0, window.setup.wizardParameter.FIREBALL_COLORS.length - 1);
    setupElement.querySelector('input[name="fireball-color"]').value = window.setup.wizardParameter.FIREBALL_COLORS[fireballColorIndex];
    wizardFireballElement.style.background = setupElement.querySelector('input[name="fireball-color"]').value;
  };

  wizardCoatElement.addEventListener('click', changeCoatColor);
  wizardEyesElement.addEventListener('click', changeEyesColor);
  wizardFireballElement.addEventListener('click', changeFireballColor);
})();
