const toggle_container = document.querySelector('.toggle_Container');
const diploma = document.getElementById('forDiploma');
const bachelor = document.getElementById('forBachelor');
const master = document.getElementById('forMaster');

let contr = 0;

toggle_container.addEventListener('click', (e) => {
    const id = e.target.id;
    if (id === 'forDiploma') {
        bachelor.classList.remove('forActive');
        master.classList.remove('forActive');
        diploma.classList.add('forActive');
    } else if (id === 'forBachelor') {
        diploma.classList.remove('forActive');
        master.classList.remove('forActive');
        bachelor.classList.add('forActive');
    } else if (id === 'forMaster') {
        diploma.classList.remove('forActive');
        bachelor.classList.remove('forActive');
        master.classList.add('forActive');
    }
});