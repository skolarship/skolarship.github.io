let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.team-member');
    const slideWidth = slides[0].offsetWidth;

    // Adjust the current slide pointer
    currentSlide += direction;

    // Ensure currentSlide is within the boundaries
    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide > slides.length - 1) {
        currentSlide = slides.length - 1;
    }
    
    const slideAmount = -currentSlide * slideWidth;
    document.querySelector('.slides-wrapper').style.transform = `translateX(${slideAmount}px)`;
}

// Initial setup to show the first slide
document.addEventListener("DOMContentLoaded", function() {
    moveSlide(0); // This initializes the slider to show the first slide
});
