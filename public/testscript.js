window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})

document.addEventListener('DOMContentLoaded', () => {
  // Select all links
  const links = document.querySelectorAll('a:not(#audioControl)');
  
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

var bgMusic = document.getElementById('bgMusic'),
    ctrl = document.getElementById('audioControl');

ctrl.onclick = function () {

    // Update the Button
    var pause = ctrl.innerHTML === '⏸';
    ctrl.innerHTML = pause ? '▶' : '⏸';

    // Update the Audio
    var method = pause ? 'pause' : 'play';
    bgMusic[method]();

    // Prevent Default Action
    return false;
};
