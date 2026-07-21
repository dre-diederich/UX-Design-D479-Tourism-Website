// Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
        const navbarToggle = document.getElementById('navbarToggle');
        const navbarMenu = document.getElementById('navbarMenu');
        if (navbarToggle) {
            navbarToggle.addEventListener('click', function() {
                navbarToggle.classList.toggle('is-active');
                navbarMenu.classList.toggle('is-active');
            });
        }
        const megaMenuToggles = document.querySelectorAll('.mega-menu-toggle');
        megaMenuToggles.forEach(toggle => {
            toggle.addEventListener('click', function(event) {
                const isMobileView = getComputedStyle(navbarToggle).display !== 'none';
                if (isMobileView) {
                    event.preventDefault();
                    const parentItem = this.closest('.mega-menu-item');
                    parentItem.classList.toggle('is-active');
                }
            });
        });


        // Flights & Hotels Tab
        const flightsBtn = document.getElementById('flights');
        const hotelsBtn = document.getElementById('hotels');

        function handleFlightBtn() {
            flightsBtn.classList.add('active');
            hotelsBtn.classList.remove('active')
        }

        function handleHotelsBtn() {
            hotelsBtn.classList
        }
});

// slideshow
let slideIndex = 1;
showSlides(slideIndex);
// next, prev
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex) = n
};
function showSlides (n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}


