document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

const hero = document.querySelector('.hero');
hero.addEventListener('mousemove', e => {
    const { offsetX, offsetY } = e;
    const { clientWidth, clientHeight } = hero;

    const xPercent = offsetX / clientWidth;
    const yPercent = offsetY / clientHeight;

    const shadowX = (xPercent - 0.5) * 50;
    const shadowY = (yPercent - 0.5) * 50;

    hero.style.boxShadow = `${shadowX}px ${shadowY}px 80px rgba(255, 0, 128, 0.3), ${-shadowX}px ${-shadowY}px 80px rgba(0, 200, 255, 0.3)`;
});
const navToggle = document.querySelector('.btn-menu');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}
