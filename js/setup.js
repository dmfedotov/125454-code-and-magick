'use strict';

var WIZARDS_QUANITY = 4;
var KeyCode = {
  ENTER: 13,
  ESC: 27
};
var WizardParameter = {
  NAMES: [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ],
  LAST_NAMES: [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ],
  COAT_COLORS: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ],
  EYES_COLORS: [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ],
  FIREBALL_COLORS: [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ]
};

var setupOpenElement = document.querySelector('.setup-open');
var setupElement = document.querySelector('.setup');
var setupCloseElement = setupElement.querySelector('.setup-close');
var inputUserNameElement = setupElement.querySelector('.setup-user-name');

var setupWizardElement = setupElement.querySelector('.setup-wizard');
var wizardCoatElement = setupWizardElement.querySelector('.setup-wizard .wizard-coat');
var wizardEyesElement = setupWizardElement.querySelector('.setup-wizard .wizard-eyes');
var wizardFireballElement = setupElement.querySelector('.setup-fireball-wrap');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

var generateWizards = function (quanity, params) {
  var wizards = [];

  for (var i = 0; i < quanity; i++) {
    var nameIndex = window.getRandomNum(0, params.NAMES.length - 1);
    var lastNameIndex = window.getRandomNum(0, params.LAST_NAMES.length - 1);
    var coatIndex = window.getRandomNum(0, params.COAT_COLORS.length - 1);
    var eyesIndex = window.getRandomNum(0, params.EYES_COLORS.length - 1);

    var wizard = {
      name: params.NAMES[nameIndex] + ' ' + params.LAST_NAMES[lastNameIndex],
      coatColor: params.COAT_COLORS[coatIndex],
      eyesColor: params.EYES_COLORS[eyesIndex],
    };
    wizards.push(wizard);
  }

  return wizards;
};

var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var wizards = generateWizards(WIZARDS_QUANITY, WizardParameter);
var renderWizards = function (elements) {
  for (var i = 0; i < elements.length; i++) {
    fragment.appendChild(createWizard(elements[i]));
  }
  similarListElement.appendChild(fragment);
};

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
  if (evt.keyCode === KeyCode.ESC && evt.target !== inputUserNameElement) {
    closePopup();
  }
};

setupOpenElement.addEventListener('click', openPopup);

setupOpenElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KeyCode.ENTER) {
    openPopup();
  }
});

setupCloseElement.addEventListener('click', closePopup);

setupCloseElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KeyCode.ENTER) {
    closePopup();
  }
});

var changeCoatColor = function () {
  var coatColorIndex = window.getRandomNum(0, WizardParameter.COAT_COLORS.length - 1);
  wizardCoatElement.style.fill = WizardParameter.COAT_COLORS[coatColorIndex];
  setupElement.querySelector('input[name="coat-color"]').value = wizardCoatElement.style.fill;
};

var changeEyesColor = function () {
  var eyesColorIndex = window.getRandomNum(0, WizardParameter.EYES_COLORS.length - 1);
  wizardEyesElement.style.fill = WizardParameter.EYES_COLORS[eyesColorIndex];
  setupElement.querySelector('input[name="eyes-color"]').value = wizardEyesElement.style.fill;
};

var changeFireballColor = function () {
  var fireballColorIndex = window.getRandomNum(0, WizardParameter.FIREBALL_COLORS.length - 1);
  setupElement.querySelector('input[name="fireball-color"]').value = WizardParameter.FIREBALL_COLORS[fireballColorIndex];
  wizardFireballElement.style.background = setupElement.querySelector('input[name="fireball-color"]').value;
};

wizardCoatElement.addEventListener('click', changeCoatColor);
wizardEyesElement.addEventListener('click', changeEyesColor);
wizardFireballElement.addEventListener('click', changeFireballColor);

renderWizards(wizards);
setupElement.querySelector('.setup-similar').classList.remove('hidden');
