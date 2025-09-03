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
  // Find the direct containers for the clicked item
  const mainContainer = clickedButton.closest('li');
  const targetDetails = mainContainer.querySelector('.expandable-details');
  const isCurrentlyOpen = targetDetails.style.display === "block";

  // Check if this is the special "Accepted Papers" section
  const isAcceptedPapers = mainContainer.classList.contains('event-accepted');

  // --- Define Avatar Movement Functions ---

  function moveAvatarsIn(container) {
    const detailsPanel = container.querySelector('.expandable-details');
    const avatarContainer = container.querySelector('.schedule-speakers');
    if (!avatarContainer) return;

    const avatars = avatarContainer.querySelectorAll('a[data-speaker-id]');
    
    avatars.forEach(avatarLink => {
      const speakerId = avatarLink.dataset.speakerId;
      const targetRow = detailsPanel.querySelector(`.paper-entry[data-speaker-id="${speakerId}"]`);
      if (targetRow) {
        avatarLink.classList.add('is-moved');
        targetRow.appendChild(avatarLink); 
      }
    });
  }

  function moveAvatarsOut(container) {
    const detailsPanel = container.querySelector('.expandable-details');
    const avatarContainer = container.querySelector('.schedule-speakers');
    if (!avatarContainer) return;

    const movedAvatars = detailsPanel.querySelectorAll('a.is-moved[data-speaker-id]');

    movedAvatars.forEach(avatarLink => {
      avatarLink.classList.remove('is-moved');
      avatarContainer.appendChild(avatarLink);
    });
  }


  // --- Main Logic ---

  // First, close any OTHER section that is currently open
  document.querySelectorAll('.expandable-details').forEach(detailsPanel => {
    if (detailsPanel !== targetDetails && detailsPanel.style.display === 'block') {
      const openContainer = detailsPanel.closest('li');
      // Move avatars back for the closing section (handle both cases)
      if (openContainer.classList.contains('event-accepted')) {
        const speakersContainer = detailsPanel.querySelector('.schedule-speakers');
        if (speakersContainer) openContainer.appendChild(speakersContainer);
      } else {
        moveAvatarsOut(openContainer);
      }
      detailsPanel.style.display = 'none';
      
      const button = openContainer.querySelector('.details-toggle-btn');
      const openText = button.getAttribute('data-open-text');
      button.innerHTML = `<i class="fa-solid fa-plus"></i> ${openText}`;
    }
  });
  
  // Now, toggle the CLICKED section
  if (isCurrentlyOpen) {
    // Action: CLOSE the clicked section
    if (isAcceptedPapers) {
      const speakersContainer = targetDetails.querySelector('.schedule-speakers');
      if (speakersContainer) mainContainer.appendChild(speakersContainer);
    } else {
      moveAvatarsOut(mainContainer);
    }
    targetDetails.style.display = 'none';
    const openText = clickedButton.getAttribute('data-open-text');
    clickedButton.innerHTML = `<i class="fa-solid fa-plus"></i> ${openText}`;
  } else {
    // Action: OPEN the clicked section
    if (isAcceptedPapers) {
      const speakersContainer = mainContainer.querySelector('.schedule-speakers');
      // ✅ CHANGE: Use appendChild to move the icons to the BOTTOM of the section
      if (speakersContainer) targetDetails.appendChild(speakersContainer);
    } else {
      moveAvatarsIn(mainContainer);
    }
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

  function highlightCurrentEvent() {
    const workshopDate = "2025-09-02"; // Correct format: YYYY-MM-DD
    const scheduleItems = document.querySelectorAll('.date-list li[data-start]');
    const now = new Date();

    // Convert current time to a simple "HH:MM" string for comparison
    const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    const currentDate = now.toISOString().slice(0, 10);

    // Only run the script on the day of the workshop
    if (currentDate !== workshopDate) {
      return; 
    }

    scheduleItems.forEach(item => {
      const startTime = item.getAttribute('data-start');
      const endTime = item.getAttribute('data-end');

      if (currentTime >= startTime && currentTime < endTime) {
        item.classList.add('current-event');
        // Optional: scroll the current event into view
        item.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        item.classList.remove('current-event');
      }
    });
  }

document.addEventListener('DOMContentLoaded', () => {
  highlightCurrentEvent(); // Run once on load
  setInterval(highlightCurrentEvent, 60000); // Update every minute
});

// --- Scrollspy for Active Navigation Link (Final Version for Sibling Sections) ---

// --- Scrollspy for Active Navigation Link (Definitive Version) ---

window.onload = () => {
  const navLinks = document.querySelectorAll("header nav a[href^='#']");
  const header = document.querySelector("header");

  if (!header) {
    console.error("Scrollspy Error: Header element not found.");
    return;
  }

  const sectionsToObserve = Array.from(navLinks).map(link => {
    const targetId = link.getAttribute("href");
    const anchorElement = document.querySelector(targetId);
    const section = anchorElement ? anchorElement.nextElementSibling : null;
    
    if (section && section.tagName === 'SECTION') {
      return { link: link, section: section };
    }
    return null;
  }).filter(item => item);

  // If there are no sections, stop the script.
  if (sectionsToObserve.length === 0) {
    console.warn("Scrollspy Warning: No sections found to observe.");
    return; 
  }

  // ✅ NEW: Get a reference to the very last navigation link
  const lastNavLink = sectionsToObserve[sectionsToObserve.length - 1].link;

  const highlightNavOnScroll = () => {
    const scrollY = window.scrollY;
    let activeLink = null;

    sectionsToObserve.forEach(item => {
      const sectionTop = item.section.offsetTop - header.offsetHeight - 20;
      if (scrollY >= sectionTop) {
        activeLink = item.link;
      }
    });

    // ✅ NEW: SPECIAL CASE for the bottom of the page
    // If the user's viewport is at the very bottom, force the last link to be active.
    const atBottom = (window.innerHeight + scrollY) >= document.documentElement.scrollHeight - 2; // 2px buffer
    if (atBottom) {
      activeLink = lastNavLink;
    }

    navLinks.forEach(link => {
      if (link === activeLink) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", highlightNavOnScroll);
  highlightNavOnScroll();
};

// In your main .js file

function toggleAnswer(questionElement) {
  const answer = questionElement.nextElementSibling;
  const icon = questionElement.querySelector('.toggle-icon');
  
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    icon.classList.remove('fa-plus-square');
    icon.classList.add('fa-minus-square');
  } else {
    answer.style.display = "none";
    icon.classList.remove('fa-minus-square');
    icon.classList.add('fa-plus-square');
  }
}