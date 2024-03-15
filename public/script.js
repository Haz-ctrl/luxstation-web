// Check if the device is mobile
function isMobileDevice() {
    return /Mobi/i.test(navigator.userAgent);
}
  
function initSwipe() {
    if (isMobileDevice()) {
      var paragraphContainer = document.querySelector('.paragraph-container');
      var hammertime = new Hammer(paragraphContainer);
  
      var currentIndex = 0;
      var maxIndex = document.querySelectorAll('.paragraph-item').length - 1;
  
      hammertime.on('swipeleft', function() {
        if (currentIndex < maxIndex) {
          currentIndex++;
          scrollToParagraph(currentIndex);
        }
      });
  
      hammertime.on('swiperight', function() {
        if (currentIndex > 0) {
          currentIndex--;
          scrollToParagraph(currentIndex);
        }
      });
    }
}
  
window.addEventListener('DOMContentLoaded', function() {
    initSwipe();
});  
  
// Scroll to the selected paragraph
function scrollToParagraph(index) {
    var paragraphContainer = document.querySelector('.paragraph-container');
    var paragraphItems = document.querySelectorAll('.paragraph-item');
    
    var scrollTo = paragraphItems[index].offsetLeft - paragraphContainer.offsetLeft;
    
    paragraphContainer.scrollTo({
      left: scrollTo,
      behavior: 'smooth'
    });
}
  
// Call the initSwipe function on page load
window.addEventListener('load', initSwipe);

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