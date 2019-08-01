const menu = document.querySelector(".menu");
const forList = document.querySelector("nav ul");
let contr = 0;

menu.addEventListener("click", e => {
    contr += 1;
    if (contr === 1) {
        forList.style.display = "block";
    } else if (contr === 2) {
        forList.style.display = "none";
        contr = 0;
    }
});