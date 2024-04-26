//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 100000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}
  
  function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    modal.style.opacity = 0;
    setTimeout(function() {
      modal.style.opacity = 1;
    }, 10); // Start transition after a short delay to allow display style to apply
  }
  
  function closeModal(modalId) {
    console.log(modalId);
    var modal = document.getElementById(modalId);
    modal.style.opacity = 0; // Begin fading out
    setTimeout(function() {
      modal.style.display = "none";
    }, 400); // Match this delay to CSS transition duration
  }
  
  // Close the modal if the user clicks outside of the modal content
  window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
      closeModal(event.target.id);
      console.log(event.target.id);
    }
  }
  
  window.onload = function() {
    var titles = document.querySelectorAll('.title');
    titles.forEach(function(title) {
      title.style.position = 'relative';
      title.style.zIndex = '50505050';
    });
  }

// Get the title element
const titleElement = document.querySelector('.title');

// Get the computed background color of the parent element
const backgroundColor = window.getComputedStyle(titleElement.parentElement).backgroundColor;

// Check if the background color is white
if (backgroundColor === 'rgb(255, 255, 255)') {
  titleElement.classList.add('inverted');
}