const btn_viewProfiles = document.querySelectorAll(".btn--view-profile");
const main_container = document.querySelector(".modal");
const modal_name = document.querySelector(".modal__name");
const modal_description = document.querySelector(".modal__description");
const modal_position = document.querySelector(".modal__position");
const modalContainer = document.querySelector(".modal__container");
const forOverlay = document.querySelector(".section_overlay");
const goBack = document.querySelector(".goBack");
const forShadows = document.querySelectorAll(".department__container");
const footer = document.querySelector("footer");
const menu = document.querySelector(".menu");
const forList = document.querySelector("nav ul");
let stateVar = true;
let contr = 0;
let id;

menu.addEventListener("click", e => {
  contr += 1;
  if (contr === 1) {
    forList.style.display = "block";
  } else if (contr === 2) {
    forList.style.display = "none";
    contr = 0;
  }
});

btn_viewProfiles.forEach(viewProfile => {
  viewProfile.addEventListener("click", e => {
    if (stateVar) {
      forShadows.forEach(forShadow => {
        forShadow.classList.remove("for_shadow");
        forShadow.classList.add("disable_shadow");
      });

      id = e.target.id;
      forModal();
      main_container.style.display = "block";
      btn_viewProfiles.forEach(trying => {
        trying.classList.remove("view_profile");
        trying.classList.add("isDisabled");
      });
      forOverlay.style.background = "rgba(128,128,128,0.7)";
      footer.style.display = "none";
      stateVar = false;
    }
    e.preventDefault();
  });
});

goBack.addEventListener("click", () => {
  stateVar = true;
  forShadows.forEach(forShadow => {
    forShadow.classList.remove("disable_shadow");
    forShadow.classList.add("for_shadow");
  });
  main_container.style.display = "none";
  forOverlay.style.background = "rgba(255,255,255)";
  footer.style.display = "block";
  btn_viewProfiles.forEach(trying => {
    trying.classList.remove("isDisabled");
    trying.classList.add("view_profile");
  });
});

async function forModal() {
  const response = await fetch("/assets/JS/department.json");
  //   console.log(response);
  const data = response.json();
  data
    .then(result => {
      //   console.log(result[id].userId);
      modal_name.textContent = result[id].name;
      modal_description.textContent = result[id].description;
      modal_position.textContent = result[id].position;
    })
    .catch(err => {
      console.log(err);
    });
}

window.addEventListener("scroll", scroller);

function scroller() {
  const scrolled = window.scrollY;
  // console.log(window.innerWidth);

  if (window.innerWidth === 1349) {
    if (scrolled >= 207) {
      modalContainer.style.position = "fixed";
      modalContainer.style.transform = "translate(200px , -100px)";
    } else {
      modalContainer.style.position = "absolute";
      modalContainer.style.transform = "translate(200px , 100px)";
    }
  } else if (window.innerWidth === 768) {
    if (scrolled >= 207) {
      modalContainer.style.position = "fixed";
      modalContainer.style.transform = "translate(63px , -184px)";
    } else {
      modalContainer.style.position = "absolute";
      modalContainer.style.transform = "translate(63px , 100px)";
    }
  } else if (window.innerWidth === 425) {
    console.log(scrolled);

    if (scrolled >= 207) {
      modalContainer.style.position = "fixed";
      modalContainer.style.transform = "translate(11px, -170px)";
    } else {
      modalContainer.style.position = "absolute";
      modalContainer.style.transform = "translate(11px, 67px)";
    }
  } else if (window.innerWidth === 375) {
    if (scrolled >= 207) {
      modalContainer.style.position = "fixed";
      modalContainer.style.transform = "translate(3px, -183px)";
    } else {
      modalContainer.style.position = "absolute";
      modalContainer.style.transform = "translate(3px, 75px)";
    }
  } else if (window.innerWidth === 320) {
    if (scrolled >= 207) {
      modalContainer.style.position = "fixed";
      modalContainer.style.transform = "translate(4px , -211px)";
    } else {
      modalContainer.style.position = "absolute";
      modalContainer.style.transform = "translate(4px, 65px)";
    }
  }
}