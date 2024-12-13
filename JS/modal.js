document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');
    
    document.querySelectorAll('.gallery img').forEach(img => {
      img.addEventListener('click', () => {
        const src = img.src;
        const title = img.getAttribute('data-title');
        const description = img.getAttribute('data-description');
        
        modalImg.src = src;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.display = 'flex';
      });
    });
  
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  