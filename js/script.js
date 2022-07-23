let btn = document.getElementById('myImg');
let modal = document.getElementById('myModal');
let close = document.getElementsByClassName('close');
btn.addEventListener('click', function() {
  modal.style.display="block";
});

window.addEventListener('click', function(e) {
  if (e.target == modal) {
    modal.style.display="none";
  }
});

close[0].addEventListener('click', function() {
  modal.style.display="none";
})