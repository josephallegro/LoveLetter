var modal = document.getElementById('modal-content');

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display ="none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(window).scroll(function(){
    $("#modal-content").css("opacity", 1 - $(window).scrollTop() / 100);
  });