const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
	hamburger_icon.innerText = hamburger_icon.innerText === 'menu' 
		? 'close'
		: 'menu';
	
	mobile_menu.classList.toggle('is-open');
})

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevArrow = document.querySelector(".prev-arrow");
  const nextArrow = document.querySelector(".next-arrow");
  const cards = document.querySelectorAll(".card");

  let currentIndex = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.style.display = i === index ? "block" : "none";
    });
  }

  function showNextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  function showPrevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  }

  nextArrow.addEventListener("click", showNextCard);
  prevArrow.addEventListener("click", showPrevCard);

  // Show the first card initially
  showCard(currentIndex);
})

document.addEventListener('DOMContentLoaded', function () {
  var images = document.querySelectorAll('.gallery-img');
  var modal = document.getElementById('imageViewer');
  var modalImg = document.getElementById("modal-image");
  var captionText = document.getElementById("caption");
  var close = document.getElementsByClassName("close")[0];
  var currentSectionImages;
  var currentIndex;

  function updateImageCounter() {
    var counter = modal.querySelector('.image-counter');
    counter.textContent = (currentIndex + 1) + '/' + currentSectionImages.length;
  }

  function showModal(image) {
    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = '<h3>' + image.dataset.title + '</h3><p>' + image.dataset.description + '</p>';
    currentSectionImages = Array.from(image.closest('.image-section').children);
    currentIndex = currentSectionImages.indexOf(image);
    updateImageCounter();
  }

  images.forEach(function (image) {
    image.addEventListener('click', function () {
      showModal(image);
    });
  });

  // Modified close event
  close.onclick = function() {
    modalImg.style.animation = "zoomOut 0.5s"; // Apply zoom out animation
    setTimeout(function() { // Timeout to allow animation to play before hiding
      modal.style.display = "none";
      modalImg.style.animation = ""; // Reset animation so it can play again on next open
    }, 500); // Timeout duration should match the animation duration
  };

  document.querySelector('.prev').addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      showModal(currentSectionImages[currentIndex]);
    }
  });

  document.querySelector('.next').addEventListener('click', function() {
    if (currentIndex < currentSectionImages.length - 1) {
      currentIndex++;
      showModal(currentSectionImages[currentIndex]);
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var items = document.querySelectorAll('.testimonial-item');
  var currentItem = 0;

  function showCurrentItem() {
    items.forEach((item, index) => {
      item.style.display = 'none';
      item.classList.remove('active');
    });
    items[currentItem].style.display = 'block';
    items[currentItem].classList.add('active');
  }

  document.querySelector('.prev-btn').addEventListener('click', function() {
    currentItem = (currentItem > 0) ? currentItem - 1 : items.length - 1;
    showCurrentItem();
  });

  document.querySelector('.next-btn').addEventListener('click', function() {
    currentItem = (currentItem < items.length - 1) ? currentItem + 1 : 0;
    showCurrentItem();
  });

  showCurrentItem(); // Initialize the slider with the first item
});