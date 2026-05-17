// Mobile menu toggle
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Donate button alert
function donateAlert() {
    alert("Thank you for your interest in donating! ❤️");
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});

//Hero image slider
const images = [
  "Hero.jpg",
  "Hero1.jpg",  
  "Hero2.jpg",
  "Hero3.jpg",
  "Hero4.jpg"
];

let index = 0;
const heroImage = document.getElementById("heroImage");

setInterval(() => {
  index = (index + 1) % images.length;
  heroImage.src = images[index];
}, 3000); // change every 3 seconds