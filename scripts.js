const reviewsSection = document.getElementById('reviewsSection');


window.addEventListener('scroll', () => {
    const sectionPosition = reviewsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    
    if (sectionPosition < windowHeight * 0.8) {
        reviewsSection.classList.add('animate'); 
    }
});


function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}


function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
