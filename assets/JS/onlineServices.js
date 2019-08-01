const toggle_container = document.querySelector('.toggle_Container');
const diploma = document.getElementById('forDiploma');
const bachelor = document.getElementById('forBachelor');
const master = document.getElementById('forMaster');
const menu = document.querySelector(".menu");
const forList = document.querySelector("nav ul");
let contr = 0;

menu.addEventListener("click", e => {
    contr += 1;
    if (contr === 1) {
        forList.style.display = "block";
        toggle_container.style.display = 'none';
    } else if (contr === 2) {
        forList.style.display = "none";
        toggle_container.style.display = 'block';
        contr = 0;
    }
});

toggle_container.addEventListener('click' ,(e)=>{
const id = e.target.id;
if(id === 'forDiploma'){
    bachelor.classList.remove('forActive');
    master.classList.remove('forActive');
    diploma.classList.add('forActive');
}else if(id === 'forBachelor'){
    diploma.classList.remove('forActive');
    master.classList.remove('forActive');
    bachelor.classList.add('forActive');
}else if(id === 'forMaster'){
    diploma.classList.remove('forActive');
    bachelor.classList.remove('forActive');
    master.classList.add('forActive');
}
});