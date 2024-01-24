document.addEventListener('DOMContentLoaded', function () {
    const hiddenElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.5 });

    hiddenElements.forEach((el) => observer.observe(el));

    const intro = document.querySelector('.intro');
    const introText = document.querySelector('.intro-text');

    function hideIntro() {
        intro.style.display = 'none';
    }

    introText.style.opacity = 1;
    introText.style.transform = 'translateY(0)';

    setTimeout(function () {
        introText.style.animation = 'flames 2s ease-in-out forwards';
        setTimeout(hideIntro, 2000);
    }, 5000);
});
