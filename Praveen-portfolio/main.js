// NAV TOGGLE
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// SERVICE HIRE BUTTON
function sendMail(service) {
  const email = "praveenkumaru101@gmail.com";
  const subject = `Hiring Request for ${service}`;
  const body = `Hi Praveen,\n\nI am interested in your ${service} services. Please contact me.\n\nThanks.`;
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// CONTACT FORM
function sendContact(e){
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  e.target.reset();
}
