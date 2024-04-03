document.addEventListener('DOMContentLoaded', function() {
  var testimonialSlider = new Swiper('.testimonial-slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

window.onscroll = function() {makeSticky()};

var navbar = document.querySelector('nav');
var sticky = navbar.offsetTop;

function makeSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var mySwiper = new Swiper('.mySwiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  });
});

var swiper = new Swiper('.mySwiper2', {
  slidesPerView: 3, // Display 3 slides at a time.
  spaceBetween: 30, // Adjust space between slides.
  loop: true, // Enable infinite looping.
  autoplay: {
    delay: 2500, // Time before auto-switching to the next slide.
    disableOnInteraction: false, // Continues autoplay after user interaction.
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // When window width is <= 600px
    600: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // When window width is <= 992px
    992: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('scroll', function() {
      const scrollIndicator = document.querySelector('.scroll-indicator');
      if (window.scrollY > 100) { // Check if scrolled more than 100px
          scrollIndicator.classList.add('hide'); // Hide the scroll indicator
      } else {
          scrollIndicator.classList.remove('hide'); // Show it again if scrolled back up
      }
  });
});

function openModal(imgSrc, info) {
  var modal = document.getElementById('imageModal');
  var modalImg = document.getElementById('modalImg');
  var modalInfo = document.getElementById('modalInfo');
  
  modalImg.src = imgSrc;
  modalInfo.innerHTML = info; // Assuming 'info' is HTML content
  
  modal.classList.add('show');
}

function closeModal() {
  var modal = document.getElementById('imageModal');
  modal.classList.remove('show');
}


// Get all service cards
const serviceCards = document.querySelectorAll('.service-card');

// Get the modal and its content
const modal = document.getElementById('serviceModal');
const modalContent = modal.querySelector('.modal-content-inner');

// Get the close button
const closeBtn = modal.querySelector('.close');

// Function to populate modal content
function showServiceDetails(service) {
  // Replace this with your own logic to fetch service details
  const serviceDetails = `
    <h2>${service.title}</h2>
    <p>${service.description}</p>
    <!-- Add more service details here -->
  `;

  modalContent.innerHTML = serviceDetails;
  modal.style.display = 'block';
}

// Add click event listeners to service cards
serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    // Replace this with your own logic to fetch service data
    const service = {
      title: card.querySelector('h4').textContent,
      description: 'This is a sample service description.'
    };

    showServiceDetails(service);
  });
});

// Close modal when the close button is clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when the user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});