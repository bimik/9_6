var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
  var element = document.createElement('li');
  var elCount = document.getElementsByTagName('li');
  element.innerHTML = 'item ' + elCount.length;
  list.appendChild(element);
});



