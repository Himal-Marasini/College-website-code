const arrayofPic = ['1', '2', '3', '4', '5', '6', '7', '8'];
const dots_Span = document.querySelectorAll('.dot');
const btn_Left = document.querySelector('.icon--left-arrow');
const btn_Right = document.querySelector('.icon--right-arrow');

let image = document.querySelector('.image__container');
let container = document.querySelector('.section__container-image');

var timing_Fnc;
var left_Right = 0;
var imageIndex = 0;



function imageSlider() {

    image.src = '../../assets/Images/' + `${arrayofPic[imageIndex]}.png`;
    dots_Span.forEach((dot) => {
        dot.classList.remove('toggle--active');
    });
    dots_Span[imageIndex].classList.add('toggle--active');
    if (imageIndex < arrayofPic.length - 1) {
        left_Right = imageIndex;
        imageIndex += 1;
    } else {
        imageIndex = 0;
    }
    timing_Fnc = setTimeout(imageSlider, 2000);
}

container.addEventListener('mouseenter', function () {
    clearTimeout(timing_Fnc);
});
container.addEventListener('mouseleave', function () {
    timing_Fnc = setTimeout(imageSlider, 2000);
});

btn_Left.addEventListener('click', function () {
    left_Right -= 1;
    image.src = `../../assets/Images/${arrayofPic[left_Right]}.png`;
    dots_Span.forEach((dot) => {
        dot.classList.remove('toggle--active');
    });
    dots_Span[left_Right].classList.add('toggle--active');
    imageIndex = left_Right;
});

btn_Right.addEventListener('click', function () {
    left_Right += 1;
    image.src = `../../assets/Images/${arrayofPic[left_Right]}.png`;
    dots_Span.forEach((dot) => {
        dot.classList.remove('toggle--active');
    });
    console.log(dots_Span[left_Right]);
    dots_Span[left_Right].classList.add('toggle--active');
    imageIndex = left_Right;
});

imageSlider();