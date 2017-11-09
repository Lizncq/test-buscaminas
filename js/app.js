window.onload = function() {
  var board = document.querySelector('.board-js')

  board.addEventListener('click', addX);

  /*board.removeEventListener('click', addBgc);*/
};

var centinel = true;

function addX(event){
  if (event.target.matches('td') && event.target.textContent === ''){
    if (centinel)
      event.target.textContent = 'X';
    else
      event.target.textContent = 'O';
    centinel = !centinel;
  }
}





/*board.addEventListener('dblclick', function(event){
    event.target.style.backgroundColor = 'red';
});*/
