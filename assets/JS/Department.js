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

let stateVar = true;
let contr = 0;
let id;


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