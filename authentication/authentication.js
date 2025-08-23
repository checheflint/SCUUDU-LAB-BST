document.addEventListener("DOMContentLoaded", () => {
  // Continue with email button
  const emailButton = document.getElementById("btn1");
  const emailInput = document.querySelector("input[type='email'], input");

  emailButton?.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (email === "" || !email.includes("@") || !email.includes(".com")) {
      alert("Please enter a valid email address.");
      return; // Stop navigation
    }

  // Save email into localStorage before navigation
  localStorage.setItem("userEmail", email);

  // Navigate if valid
  window.location.href = "verify1.html";
});
   // Social login buttons
  const googleBtn = document.querySelector("img[alt='Google']")?.parentElement || document.querySelector("button.google");
  const appleBtn = document.querySelector("img[alt='Apple']")?.parentElement || document.querySelector("button.apple");
  const fbBtn = document.querySelector("img[alt='Facebook']")?.parentElement || document.querySelector("button.facebook");

  googleBtn?.addEventListener("click", () => {
    alert("Please enter your email address to continue.");
      return;
    window.location.href = "verify1.html";
  });

  appleBtn?.addEventListener("click", () => {
    alert("Login with apple ID not available now.");
      return;
    window.location.href = "verify1.html";
  });

  fbBtn?.addEventListener("click", () => {
    alert("Login with facebook account not available now.");
      return;
    window.location.href = "verify1.html";
  });



  // Links
  const termsLink = document.querySelector("a[href*='terms']");
  const privacyLink = document.querySelector("a[href*='privacy']");

  document.getElementById("terms").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "T&C.html";
});
document.getElementById("privacy").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "privacy.html";
});




// Example: after signup/login, you get the user's email
  const email = localStorage.getItem("userEmail");
    if (email) {
      document.getElementById("users-email").textContent = email;
    }



const inputs = Array.from(document.querySelectorAll('.otp-input'));
const verifyBtn = document.getElementById('btn2');
const clearBtn = document.getElementById('clear');

function focusIndex(i) {
  if (i >= 0 && i < inputs.length) inputs[i].focus();
}

function normalize(value) {
  return (value || '').replace(/[^a-zA-Z0-9]/g, '').slice(0, 1).toUpperCase();
}

// Enable/disable verify button depending on filled inputs
function toggleVerifyButton() {
  const allFilled = inputs.every(i => i.value.trim() !== "");
  verifyBtn.disabled = !allFilled;
}

inputs.forEach((input, idx) => {
  input.addEventListener('input', (e) => {
    const v = normalize(e.target.value);
    e.target.value = v;
    if (v && idx < inputs.length - 1) focusIndex(idx + 1);
    toggleVerifyButton();
  });

  input.addEventListener('focus', (e) => {
    requestAnimationFrame(() => e.target.select());
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (!e.target.value && idx > 0) {
        focusIndex(idx - 1);
        inputs[idx - 1].value = '';
      }
      toggleVerifyButton();
      return;
    }
    if (e.key === 'ArrowLeft') { e.preventDefault(); focusIndex(idx - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); focusIndex(idx + 1); }
    if (e.key === ' ' || e.key === 'Spacebar') e.preventDefault();
  });

  input.addEventListener('paste', (e) => {
    e.preventDefault();
    const text = (e.clipboardData || window.clipboardData).getData('text');
    const chars = (text || '').replace(/\s+/g, '').toUpperCase().match(/[A-Z0-9]/g) || [];
    if (!chars.length) return;
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = chars[i] || '';
    }
    toggleVerifyButton();
    const next = inputs.findIndex(el => !el.value);
    focusIndex(next === -1 ? inputs.length - 1 : next);
  });
});

// ✅ Verify button logic
verifyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const code = inputs.map(i => normalize(i.value)).join('');
   const letters = code.replace(/[^A-Z]/g, '').length;
  const numbers = code.replace(/[^0-9]/g, '').length;


  if (code.length !== inputs.length) {
    alert('Incorrect verification code!.');
    return;
  }
  

  if (inputs.some(i => i.value.trim() === "")) {
    alert("Please enter the verification code to proceed.");
    return;
  }

  if (letters !== 2 || numbers !== 4) {
    alert('Incorrect verification code!.');
    return;
  }

  alert(`✅ Congratulations!`);
  window.location.href = "../index.html";
});


// Clear all inputs
clearBtn.addEventListener('click', () => {
  inputs.forEach(i => i.value = '');
  focusIndex(0);
  toggleVerifyButton();
});

// Initial focus
focusIndex(0);
toggleVerifyButton();
});




const backBtn = document.getElementById("back");

if (backBtn) {
  backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "authentication.html";
  });
}



const requestBtn = document.getElementById("request");

if (requestBtn) {
  requestBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "verify1.html";
  });
}



window.onload = function () {
      let countdown = 60; // starting number
      let display = document.getElementById("count");

      let timer = setInterval(function () {
        countdown--;
        display.textContent = countdown;

        if (countdown <= 0) {
          clearInterval(timer);
          window.location.href = "verify2.html";
        }
      }, 1000); // runs every 1 second
    };


