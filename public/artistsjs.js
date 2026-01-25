var tupacmodal = document.getElementById("2pac-modal");

var tupacbtn = document.getElementById("2pac-modal-btn");

var span = document.getElementsByClassName("close")[0];

tupacbtn.onclick = function() {
  tupacmodal.style.display = "block";
}


var snoopmodal = document.getElementById("snoop-modal");

var snoopbtn = document.getElementById("snoop-modal-btn");

var snoopspan = document.getElementsByClassName("snoopclose")[0];

snoopbtn.onclick = function() {
  snoopmodal.style.display = "block";
}


var dremodal = document.getElementById("dre-modal");

var drebtn = document.getElementById("dre-modal-btn");

var drespan = document.getElementsByClassName("dreclose")[0];

drebtn.onclick = function() {
  dremodal.style.display = "block";
}


var eazyemodal = document.getElementById("eazye-modal");

var eazyebtn = document.getElementById("eazye-modal-btn");

var eazyespan = document.getElementsByClassName("eazyeclose")[0];

eazyebtn.onclick = function() {
  eazyemodal.style.display = "block";
}

var jayzmodal = document.getElementById("jayz-modal");

var jayzbtn = document.getElementById("jayz-modal-btn");

var jayzspan = document.getElementsByClassName("jayzclose")[0];

jayzbtn.onclick = function() {
  jayzmodal.style.display = "block";
}


var bigmodal = document.getElementById("big-modal");

var bigbtn = document.getElementById("big-modal-btn");

var bigspan = document.getElementsByClassName("bigclose")[0];

bigbtn.onclick = function() {
  bigmodal.style.display = "block";
}


var nasmodal = document.getElementById("nas-modal");

var nasbtn = document.getElementById("nas-modal-btn");

var nasspan = document.getElementsByClassName("nasclose")[0];

nasbtn.onclick = function() {
  nasmodal.style.display = "block";
}


var fiftymodal = document.getElementById("fifty-modal");

var fiftybtn = document.getElementById("fifty-modal-btn");

var fiftyspan = document.getElementsByClassName("fiftyclose")[0];

fiftybtn.onclick = function() {
  fiftymodal.style.display = "block";
}



window.onclick = function(event) {
  if (event.target === tupacmodal) tupacmodal.style.display = "none";
  if (event.target === snoopmodal) snoopmodal.style.display = "none";
  if (event.target === dremodal) dremodal.style.display = "none";
  if (event.target === eazyemodal) dremodal.style.display = "none";
  if (event.target === jayzmodal) tupacmodal.style.display = "none";
  if (event.target === bigmodal) snoopmodal.style.display = "none";
  if (event.target === nasmodal) dremodal.style.display = "none";
  if (event.target === fiftymodal) dremodal.style.display = "none";
}

document.querySelectorAll(".close, .snoopclose, .dreclose, .eazyeclose, .jayzclose, .bigclose, .nasclose, .fiftyclose").forEach(btn => {
  btn.onclick = () => btn.closest(".modal").style.display = "none";
});




window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})

document.addEventListener('DOMContentLoaded', () => {
  // Select all links
  const links = document.querySelectorAll('a');
  
  links.forEach(link => {
    link.addEventListener('click', e => {
      // Exclude external links or hash links if needed
      if (link.hostname !== window.location.hostname) return;
      
      e.preventDefault(); // Stop immediate navigation
      const target = link.href;
      
      // Add fade-out class
      document.body.classList.add('fade-out');
      
      // Navigate after animation
      setTimeout(() => {
        window.location.href = target;
      }, 500); // Matches CSS duration
    });
  });
});