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

/*photobooth*/
const elements = {
  video: document.getElementById('liveVideo'),
  canvas: document.getElementById('finalCanvas'),
  ctx: document.getElementById('finalCanvas').getContext('2d'),
  takePhotoBtn: document.getElementById('takePhoto'),
  countdownEl: document.querySelector('.countdown-timer')
};

let photoStage = 0;

const countDown = callback => {
  let count = 3;
  const countdownEl = elements.countdownEl;
  countdownEl.textContent = count;
  countdownEl.style.display = 'flex';

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      countdownEl.textContent = count;
    } else {
      clearInterval(interval);
      countdownEl.style.display = 'none';
      callback();
    }
}
}
