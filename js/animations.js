// Animation on Scroll (AOS) Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Simple AOS implementation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('[data-aos]');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('aos-animate');
            }
        });
    };
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Nav indicator animation
    const navItems = document.querySelectorAll('.nav-links a');
    const navIndicator = document.querySelector('.nav-indicator');
    
    function moveIndicator(element) {
        navIndicator.style.width = `${element.offsetWidth}px`;
        navIndicator.style.left = `${element.offsetLeft}px`;
    }
    
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => moveIndicator(item));
        
        if (item.classList.contains('active')) {
            moveIndicator(item);
        }
    });
    
    // Scroll to top button
    const scrollToTopBtn = document.createElement('div');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    // Current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
});