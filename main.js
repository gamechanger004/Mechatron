let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function plusSlides(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

function currentSlide(n) {
    slideIndex = n;
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex-1].className += " active";
}
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}  

//icon
document.addEventListener('DOMContentLoaded', function() {
    const whatsappFloat = document.getElementById('whatsapp-float');

    let isDragging = false;
    let startX, startY, initialX, initialY;

    whatsappFloat.addEventListener('mousedown', startDrag);
    whatsappFloat.addEventListener('touchstart', startDrag);

    function startDrag(e) {
        e.preventDefault();
        if (e.type === 'mousedown' || (e.type === 'touchstart' && e.touches.length === 1)) {
            isDragging = true;
            startX = e.clientX || e.touches[0].clientX;
            startY = e.clientY || e.touches[0].clientY;
            const rect = whatsappFloat.getBoundingClientRect();
            initialX = rect.left;
            initialY = rect.top;
            whatsappFloat.style.cursor = 'grabbing';
            whatsappFloat.style.transition = 'none';
            document.addEventListener('mousemove', drag);
            document.addEventListener('touchmove', drag);
            document.addEventListener('mouseup', endDrag);
            document.addEventListener('touchend', endDrag);
        }
    }

    function drag(e) {
        if (isDragging) {
            const clientX = e.clientX || e.touches[0].clientX;
            const clientY = e.clientY || e.touches[0].clientY;
            const dx = clientX - startX;
            const dy = clientY - startY;
            whatsappFloat.style.left = `${initialX + dx}px`;
            whatsappFloat.style.top = `${initialY + dy}px`;
            whatsappFloat.style.bottom = 'auto';
            whatsappFloat.style.right = 'auto';
        }
    }

    function endDrag() {
        if (isDragging) {
            isDragging = false;
            whatsappFloat.style.cursor = 'pointer';
            whatsappFloat.style.transition = '';
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('mouseup', endDrag);
            document.removeEventListener('touchend', endDrag);
        }
    }
});
//cards slide
        let currentIndex = 0;
        const reviews = document.querySelectorAll('.review');
        const totalSlides = reviews.length;
        const reviewsToShow = 3;
        const reviewContainer = document.querySelector('.review-container');

        document.getElementById('next').addEventListener('click', () => {
            moveNext();
        });

        document.getElementById('prev').addEventListener('click', () => {
            movePrev();
        });

        function updateSlide() {
            const offset = -(currentIndex * 100 / reviewsToShow);
            reviewContainer.style.transform = `translateX(${offset}%)`;
        }

        function moveNext() {
            currentIndex = (currentIndex + 1) % (totalSlides / reviewsToShow);
            updateSlide();
        }

        function movePrev() {
            currentIndex = (currentIndex - 1 + totalSlides / reviewsToShow) % (totalSlides / reviewsToShow);
            updateSlide();
        }

        // Optional: Automatic slideshow
        setInterval(() => {
            moveNext();
        }, 5000); // Change slide every 5 seconds

// JavaScript for controlling the sliding effect
let serviceIndex = 0;
showServices();

function showServices() {
    let services = document.querySelector('.service-wrapper');
    services.style.animation = 'slideAnimation 10s infinite'; // Adjust duration as needed
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const homeSection = document.querySelector('#Home');

    function checkScroll() {
        const homeHeight = homeSection.offsetHeight;
        if (window.scrollY < homeHeight) {
            navbar.classList.add('transparent');
            navbar.classList.remove('scrolled');
        } else {
            navbar.classList.remove('transparent');
            navbar.classList.add('scrolled');
        }
    }

    // Initial check
    checkScroll();

    // Check scroll on scroll event
    window.addEventListener('scroll', checkScroll);
});




var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});