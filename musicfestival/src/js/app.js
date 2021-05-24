document,addEventListener('DOMContentLoaded', function() {
    scrollNav();

    fixednav();
});

function fixednav() {
    const bar = document.querySelector('.header');

    // Register Intersection Observer
    const observer = new IntersectionObserver( function(entries) {
        if( entries[0].isIntersecting) {
            bar.classList.remove('fixed');
        } else {
            bar.classList.add('fixed');
        }
    });

    // Element to observe
    observer.observe(document.querySelector('.about-festival'));
}

function scrollNav() {
    const links = document.querySelectorAll('.main-nav a');
    
    links.forEach( function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(e.target.attributes.href.value);

            section.scrollIntoView({
                behavior: 'smooth',
            });

        });
    })
}