const arrayofPic = ['1', '2', '3', '4', '5', '6', '7', '8'];
const dots_Span = document.querySelectorAll('.dot');
const btn_Left = document.querySelector('.btn_one');
const btn_Right = document.querySelector('.btn_two');
let image = document.getElementById('Lec_pic');
let container = document.querySelector('.container');
const menu = document.querySelector(".menu");
const forList = document.querySelector("nav ul");
var timing_Fnc;
let contr = 0;

var left_Right = 0;
var imageIndex = 0;

menu.addEventListener("click", e => {
    contr += 1;
    if (contr === 1) {
        forList.style.display = "block";
    } else if (contr === 2) {
        forList.style.display = "none";
        contr = 0;
    }
});

function imageSlider() {

    image.src = 'assets/Images/' + `${arrayofPic[imageIndex]}.png`;
    dots_Span.forEach((dot) => {
        dot.classList.remove('dottoggle');
    });
    dots_Span[imageIndex].classList.add('dottoggle');
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
    image.src = `assets/Images/${arrayofPic[left_Right]}.png`;
    // console.log(image.src);
    dots_Span.forEach((dot) => {
        dot.classList.remove('dottoggle');
    });
    dots_Span[left_Right].classList.add('dottoggle');
    imageIndex = left_Right;
});

btn_Right.addEventListener('click', function () {
    left_Right += 1;
    image.src = `assets/Images/${arrayofPic[left_Right]}.png`;
    dots_Span.forEach((dot) => {
        dot.classList.remove('dottoggle');
    });
    console.log(dots_Span[left_Right]);
    dots_Span[left_Right].classList.add('dottoggle');
    imageIndex = left_Right;
});

imageSlider();
// console.log('');