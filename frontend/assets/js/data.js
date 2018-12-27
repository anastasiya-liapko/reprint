'use strict';

$(function () {

var books = {};
var book = {
  'name': 'Биографии российских генералиссимусов...',
  'author': 'Н. Бантыш-каменский.',
  'image': 'img/book.jpg'
}

for (var i = 0; i < 100; i++) {
  books[i] = book;
};

window.data = {
  books: books
};

});