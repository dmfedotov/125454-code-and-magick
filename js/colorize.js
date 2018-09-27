'use strict';

(function () {
  var WizardColor = {
    COAT: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    EYES: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ],
    FIREBALL: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ]
  };
  var setupElement = document.querySelector('.setup');
  var setupWizardElement = setupElement.querySelector('.setup-wizard');
  var wizardCoatElement = setupWizardElement.querySelector('.setup-wizard .wizard-coat');
  var wizardEyesElement = setupWizardElement.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireballElement = setupElement.querySelector('.setup-fireball-wrap');

  var changeCoatColor = function () {
    var coatColorIndex = window.util.getRandomNum(0, WizardColor.COAT.length - 1);
    wizardCoatElement.style.fill = WizardColor.COAT[coatColorIndex];
    setupElement.querySelector('input[name="coat-color"]').value = wizardCoatElement.style.fill;
  };

  var changeEyesColor = function () {
    var eyesColorIndex = window.util.getRandomNum(0, WizardColor.EYES.length - 1);
    wizardEyesElement.style.fill = WizardColor.EYES[eyesColorIndex];
    setupElement.querySelector('input[name="eyes-color"]').value = wizardEyesElement.style.fill;
  };

  var changeFireballColor = function () {
    var fireballColorIndex = window.util.getRandomNum(0, WizardColor.FIREBALL.length - 1);
    setupElement.querySelector('input[name="fireball-color"]').value = WizardColor.FIREBALL[fireballColorIndex];
    wizardFireballElement.style.background = setupElement.querySelector('input[name="fireball-color"]').value;
  };

  wizardCoatElement.addEventListener('click', changeCoatColor);
  wizardEyesElement.addEventListener('click', changeEyesColor);
  wizardFireballElement.addEventListener('click', changeFireballColor);
})();
