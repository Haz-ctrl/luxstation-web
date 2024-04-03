const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.close-btn');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = item.querySelector('img').src;
    modalTitle.textContent = item.dataset.title;
    modalDescription.textContent = item.dataset.description;
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
