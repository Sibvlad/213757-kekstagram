'use strict';

requirejs([
  './load',
  './getphoto'
], function(load, getPhoto) {
  var filters = document.querySelector('.filters');
  var PICTURES_LOAD_URL = 'http://localhost:1507/api/pictures';

  var renderPhotos = function(data) {
    data.forEach(function(picture) {
      getPhoto(picture);
    });
  };

  filters.classList.add('hidden');

  load(PICTURES_LOAD_URL, renderPhotos);

  filters.classList.remove('hidden');
});
