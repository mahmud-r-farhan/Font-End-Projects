document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('mainNavbar');
    var sticky = 200; // Scroll threshold

    function handleScroll() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add('sticky-top');
            document.body.classList.add('fixed-nav');
        } else {
            navbar.classList.remove('sticky-top');
            document.body.classList.remove('fixed-nav');
        }
    }

    window.onscroll = handleScroll;

    // Initialize the carousel with a 2-second interval
    var myCarousel = new bootstrap.Carousel(document.getElementById('cateringCarousel'), {
        interval: 2000
    });
});

function updateDateTime() {
    const now = new Date();
    const dayTime = now.toLocaleString('en-US', { weekday: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const fullDate = now.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    document.getElementById('Time').innerHTML = `${dayTime}, ${fullDate}`;
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);
    