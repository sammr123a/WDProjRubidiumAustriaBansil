const hideButton = document.getElementById('hider');
const signUpForm = document.getElementById('signUpForm');
const logInForm = document.getElementById('logInForm');
const userGreet = document.getElementById('greetUser');
const signUp = document.getElementById('signUp')
const logIn = document.getElementById('logIn')

hideButton.addEventListener('click', function () {
  if (localStorage.getItem("user") !== null) {
    userGreet.style.display = 'none'
  }

  if (signUpForm.style.display === 'none') {
      signUpForm.style.display = 'block';
      logInForm.style.display = 'none';
      hideButton.style.marginLeft = '-156px';
      hideButton.textContent = 'Click here to Log In'
    } else {
      signUpForm.style.display = 'none';
      logInForm.style.display = 'block';
      hideButton.style.marginLeft = '0px';
      hideButton.textContent = 'Click here to Sign Up'
    }
  
})

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
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

  if (localStorage.getItem("user") !== null) {
    const storedUser = localStorage.getItem("user");
    console.log(`User ${JSON.parse(storedUser).username} has opened the website!`)
    userGreet.innerHTML = `Hello ${JSON.parse(storedUser).username}! Welcome back to our website!` 
    signUpForm.style.display = 'none';
    logInForm.style.display = 'none';
    hideButton.textContent = 'Log Out'
    userGreet.style.display = 'block'
    hideButton.style.marginLeft = '0px';
    hideButton.style.marginTop = '18px';
  } else {
    console.log("have not logged in yet!")
    userGreet.style.display = 'none'
  }
});

function handleSignUpSubmit() {
  e.preventDefault();
  
  let user = {
    email: document.getElementsByName('email')[0].value,
    username: document.getElementsByName('uname')[0].value,
    psword: document.getElementsByName('psw')[0].value
  }

  const remember = document.getElementsByName('remember')[0]

  if (remember.checked) {
    localStorage.setItem('user', JSON.stringify(user))
  }
}

signUp.addEventListener("submit", handleSignUpSubmit);