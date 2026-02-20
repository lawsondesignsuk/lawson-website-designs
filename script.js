// Guarded modal logic (only runs if modal exists on the page)
const openPopup = document.getElementById('open-popup');
const popupModal = document.getElementById('popup-modal');
const closeBtn = document.querySelector('.close-btn');

if (openPopup && popupModal && closeBtn) {
    openPopup.addEventListener('click', (e) => {
        e.preventDefault();
        popupModal.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        popupModal.classList.remove('show');
    });

    popupModal.addEventListener('click', (e) => {
        if (e.target === popupModal) {
            popupModal.classList.remove('show');
        }
    });
}
