'use strict';

var getPhoto = function(picture, template, IMAGE_LOAD_TIMEOUT) {

  var templateContainer = template.content ? template.content : template;
  var container = document.querySelector('.pictures');
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

module.exports = getPhoto;
