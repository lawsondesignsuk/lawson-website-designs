// Select elements
const openPopup = document.getElementById('open-popup');
const popupModal = document.getElementById('popup-modal');
const closeBtn = document.querySelector('.close-btn');

// Open modal on click
openPopup.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    popupModal.classList.add('show');
});

// Close modal on close button click
closeBtn.addEventListener('click', () => {
    popupModal.classList.remove('show');
});

// Close modal on clicking outside the modal content
popupModal.addEventListener('click', (e) => {
    if (e.target === popupModal) {
        popupModal.classList.remove('show');
    }
});
