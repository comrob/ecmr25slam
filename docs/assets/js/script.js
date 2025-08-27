// Open bibtex
function toggleContent(publicationId) {
  var content = document.getElementById('postContent' + publicationId);
  content.classList.toggle('show-content');
}

// Filter of open topics
document.addEventListener('DOMContentLoaded', function () {
  const filterSelect = document.getElementById('position-filter');
  const cards = document.querySelectorAll('.cards-card');

  if (filterSelect != null) {
    filterSelect.addEventListener('change', function () {
      const selected = this.value;

      cards.forEach(card => {
        const types = card.getAttribute('data-type').toLowerCase().split(',').map(s => s.trim());

        if (selected === 'all' || types.includes(selected)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});

// Copy to clipboard
function copyToClipboard(button) {
  const code = button.nextElementSibling.innerText;
  navigator.clipboard.writeText(code).then(() => {
    button.innerText = "Copied!";
    setTimeout(() => button.innerText = "Copy", 2000);
  });
}

// Scroll to view - TODO: little offset
// The fix: only scroll if the element exists
const scrollElement = document.getElementById("scroll");
if (scrollElement) {
  scrollElement.scrollIntoView({block: 'start', behavior: 'smooth'});
}

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header"); // Or 'nav' or your main header element selector

  // Function to set the header height CSS variable
  const setHeaderHeight = () => {
    if (header) {
      const headerHeight = header.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
      document.documentElement.style.setProperty('--header-height-increased', `${headerHeight+5}px`);
    }
  };

  // Set the height on initial load
  setHeaderHeight();

  // Re-set the height if the window is resized
  window.addEventListener("resize", setHeaderHeight);
});

// Add this function inside your existing <script> tag
function toggleDetails(clickedButton) {
  // Go up two levels to the main container div
  const mainContainer = clickedButton.parentElement.parentElement;
  // Find the details section within that main container
  const targetDetails = mainContainer.querySelector('.expandable-details');
  
  // Check if the section we clicked is already open
  const isCurrentlyOpen = targetDetails.style.display === "block";

  // --- Step 1: Close all open sections and reset all buttons ---
  document.querySelectorAll('.expandable-details').forEach(details => {
    details.style.display = 'none';
  });

  document.querySelectorAll('.details-toggle-btn').forEach(button => {
    const openText = button.getAttribute('data-open-text');
    button.innerHTML = `<i class="fa-solid fa-plus"></i> ${openText}`;
  });
  
  // --- Step 2: If the section we clicked was closed, open it ---
  if (!isCurrentlyOpen) {
    targetDetails.style.display = 'block';
    clickedButton.innerHTML = '<i class="fa-solid fa-minus"></i> Show Less';
  }
}

// --- Combined and Corrected Responsive Navigation ---
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("header nav");
  const navLinks = document.querySelectorAll("header nav a");

  // Make sure all elements exist before adding listeners
  if (toggle && nav) {
    // Logic to open/close the menu with the hamburger button
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      nav.classList.toggle("show");
    });
  }

  // Logic to close the menu when a nav link is clicked
  if (navLinks.length > 0 && nav) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Check if the menu is open before trying to close it
        if (nav.classList.contains('show')) {
          nav.classList.remove('show');
          toggle.classList.remove('open'); // Also reset the hamburger icon
        }
      });
    });
  }
});



  // Set the date we're counting down to (September 2, 2025)
  const countDownDate = new Date("Sep 02, 2025 09:00:00").getTime();

  // Update the count down every 1 second
  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = `
      <div><span>${days}</span><p>Days</p></div>
      <div><span>${hours}</span><p>Hours</p></div>
      <div><span>${minutes}</span><p>Minutes</p></div>
      <div><span>${seconds}</span><p>Seconds</p></div>
    `;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "<h3>The deadline has passed!</h3>";
    }
  }, 1000);