'use strict';

(function() {

  var filters = document.querySelector('.filters');
  var template = document.getElementById('picture-template');
  var templateContainer = template.content ? template.content : template;
  var container = document.querySelector('.pictures');
  var IMAGE_LOAD_TIMEOUT = 10000;
  var PICTURES_LOAD_URL = 'http://localhost:1507/api/pictures';

  var load = function(url, callback) {
    var callbackName = 'cb' + Date.now();

    window[callbackName] = function(data) {
      callback(data);
    };

    var script = document.createElement('script');
    script.src = url + '?callback=' + callbackName;
    document.body.appendChild(script);
  };

  var getPhoto = function(picture) {
    var photo = templateContainer.querySelector('.picture').cloneNode(true);
    photo.querySelector('.picture-likes').textContent = picture.likes;
    photo.querySelector('.picture-comments').textContent = picture.comments;

    var image = new Image();

    image.onload = function(evt) {
      clearTimeout(photoTimeout);
      photo.querySelector('img').src = evt.target.src;
    };

    image.onerror = function() {
      photo.classList.add('picture-load-failure');
    };

    image.src = picture.url;

    var photoTimeout = setTimeout(function() {
      photo.classList.add('picture-load-failure');
    }, IMAGE_LOAD_TIMEOUT);

    container.appendChild(photo);

    return photo;
  };

  var renderPhotos = function(data) {
    data.forEach(function(picture) {
      getPhoto(picture);
    });
  };

  filters.classList.add('hidden');

  load(PICTURES_LOAD_URL, renderPhotos);

  filters.classList.remove('hidden');
})();

