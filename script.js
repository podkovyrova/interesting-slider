const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button'); //получение кнопок
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');

const slidesCount = mainSlide.querySelectorAll('div').length; // длина коллекции дивов из контейнера со слайдами

let activeSlideIndex = 0; //какой слайд активный

sidebar.style.top = `-${(slidesCount-1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
})
downBtn.addEventListener('click', () => {
    changeSlide('down');
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up');
    } else if (event.key === 'ArrowDown') {
        changeSlide('down');
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }


    const heightOfWindow = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * heightOfWindow}px)`; //высота окна на индекс активного слайда
    sidebar.style.transform = `translateY(${activeSlideIndex * heightOfWindow}px)`;
}
