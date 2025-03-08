// Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

// Password Protected Section
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");
const protectedContent = document.getElementById("protectedContent");

passwordForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting and reloading the page

  const password = passwordInput.value;
  if (password === "alpha123") {
    // Replace 'alpha123' with your desired password
    protectedContent.style.display = "block";
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
  }
});

// Get all sticky images
const stickyImages = document.querySelectorAll('.sticky-image');

// Function to handle scroll events
function handleScroll() {
    stickyImages.forEach((image) => {
        const section = image.closest('section'); // Get the parent section
        const sectionRect = section.getBoundingClientRect();
        const imageRect = image.getBoundingClientRect();

        // Check if the section is in view
        if (sectionRect.top <= 100 && sectionRect.bottom >= 100) {
            image.style.position = 'sticky';
            image.style.top = '100px'; // Adjust this value to match your header height
        } else {
            image.style.position = 'static'; // Stop sticking when the section is out of view
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);