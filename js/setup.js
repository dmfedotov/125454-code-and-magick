'use strict';

var WIZARDS_QUANITY = 4;
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

var wizardParams = {
  NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  LAST_NAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
};

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

var wizards = generateWizards(WIZARDS_QUANITY, wizardParams);
var renderWizards = function (elements) {
  for (var i = 0; i < elements.length; i++) {
    fragment.appendChild(createWizard(elements[i]));
  }
  similarListElement.appendChild(fragment);
};

renderWizards(wizards);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
