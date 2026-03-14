document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Animations on Scroll
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // 2. Navbar Blur Effect on Scroll (Apple-like sticky nav opacity change)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
            navbar.style.backdropFilter = 'blur(20px) saturate(180%)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.7)';
            navbar.style.backdropFilter = 'blur(12px) saturate(180%)';
        }
    });

});
