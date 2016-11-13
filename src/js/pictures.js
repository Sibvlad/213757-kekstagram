'use strict';

var load = require('./load');
var getPhoto = require('./picture');

(function() {
  var templateContainer = template.content ? template.content : template;
  var container = document.querySelector('.pictures');
  var template = document.getElementById('picture-template');
  var IMAGE_LOAD_TIMEOUT = 10000;
  var filters = document.querySelector('.filters');
  var PICTURES_LOAD_URL = 'http://localhost:1507/api/pictures';

  var renderPhotos = function(data) {
    data.forEach(function(picture) {
      container.appendChild(getPhoto(picture, templateContainer, IMAGE_LOAD_TIMEOUT));
    });
  };

  filters.classList.add('hidden');

  load(PICTURES_LOAD_URL, renderPhotos);

  filters.classList.remove('hidden');
})();
