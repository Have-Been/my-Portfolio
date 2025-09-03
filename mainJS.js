const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentIndex);
    });
}

document.querySelector('.btn.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
});

document.querySelector('.btn.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
});

updateCarousel();