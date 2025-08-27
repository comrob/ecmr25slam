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

// Resposive navigation
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    nav.classList.toggle("show");
  });
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