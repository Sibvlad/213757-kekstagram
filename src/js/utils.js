'use strict';

module.exports = {

  getDaysToExpireCookie: function() {
    var curDate = new Date();
    var birthday = new Date(1906, 11, 9);
    var thisYearBirthday = new Date(curDate.getFullYear(), birthday.getMonth(), birthday.getDate());
    if (curDate > thisYearBirthday) {
      return Math.ceil(curDate - thisYearBirthday) / (1000 * 60 * 60 * 24);
    } else {
      var lastYearBirthday = new Date( curDate.getFullYear() - 1, birthday.getMonth(), birthday.getDate());
      return Math.ceil( (curDate - lastYearBirthday) / (1000 * 60 * 60 * 24) );
    }
  }
};
