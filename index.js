const IMAGES_WRAPPER = document.querySelector('.images-wrapper');

let fakeDom = '';
for (let i = 1; i <= 5; i++) {
    const img = `<img src="https://picsum.photos/1280/500?random=${i}">`;
    fakeDom += img;
}
IMAGES_WRAPPER.innerHTML += fakeDom;

const previous = document.querySelector('.fa-arrow-left');
const next = document.querySelector('.fa-arrow-right');

const BIG_DOT = document.querySelector('.big-dot');

let left = null;
let bigDotPositionLeft = 0; 
previous.addEventListener('click', function() {
    if (left == 0) {
        left = 80;
        bigDotPositionLeft = 100;
        BIG_DOT.style.left = `${bigDotPositionLeft}%`;
        IMAGES_WRAPPER.style.transform = `translateX(-${left}%)`
        return;
    }
    left -= 20;
    bigDotPositionLeft -= 25;
    BIG_DOT.style.left = `${bigDotPositionLeft}%`;
    IMAGES_WRAPPER.style.transform = `translateX(-${left}%)`
})

next.addEventListener('click', function() {
    left += 20;
    bigDotPositionLeft += 25;
    if (left == 100) {
        left = 0;
        bigDotPositionLeft = 0;
    }
    BIG_DOT.style.left = `${bigDotPositionLeft}%`;
    IMAGES_WRAPPER.style.transform = `translateX(-${left}%)`
})