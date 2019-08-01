const right_arrow = document.getElementById("right_arrow");
const left_arrow = document.getElementById("left_arrow");
const angle_left = document.querySelector(".angle_left");
const angle_right = document.querySelector(".angle_right");
const diploma_box = document.querySelector(".forDiploma");
const bachelor_box = document.querySelector(".forBachelor");
const master_box = document.querySelector(".forMaster");
const first_activity = document.querySelector(".first_activity");
const second_activity = document.querySelector(".second_activity");
const third_activity = document.querySelector(".third_activity");
const navlist = document.querySelector(".headerNav");
const menu = document.querySelector(".menu");

let cont = 0;
let contr = 0;
let cont_left = 0;

if (screen.width <= 768) {
  window.addEventListener("click", e => {
    contr += 1;
    if (e.target.className === "menu" && contr === 1) {
      navlist.style.display = "block";
      menu.style.display = "none";
    } else if (contr === 2) {
      navlist.style.display = "none";
      menu.style.display = "block";
      contr = 0;
    }
  });
}

first_activity.addEventListener("mouseenter", () => {
  const image = document.getElementById("first_coCurricular");
  image.style.transform = "scale(1.9)";
});
first_activity.addEventListener("mouseleave", () => {
  const image = document.getElementById("first_coCurricular");
  image.style.transform = "scale(1)";
});
second_activity.addEventListener("mouseenter", () => {
  const image = document.getElementById("Second_coCurricular");
  image.style.transform = "scale(1.9)";
});
second_activity.addEventListener("mouseleave", () => {
  const image = document.getElementById("Second_coCurricular");
  image.style.transform = "scale(1)";
});
third_activity.addEventListener("mouseenter", () => {
  const image = document.getElementById("Third_coCurricular");
  image.style.transform = "scale(1.9)";
});
third_activity.addEventListener("mouseleave", () => {
  const image = document.getElementById("Third_coCurricular");
  image.style.transform = "scale(1)";
});

if (screen.width === 375) {
  right_arrow.addEventListener("click", () => {
    if (cont >= 2) {
      cont = 1;
    }
    cont += 1;

    if (cont === 1) {
      bachelor_box.style.visibility = "visible";
      bachelor_box.style.left = "36px";
      diploma_box.style.left = "-238px";
    } else if (cont === 2) {
      bachelor_box.style.left = "-306px";
      master_box.style.left = "43px";
      master_box.style.visibility = "visible";
      right_arrow.style.display = "none";
    }
    left_arrow.style.display = "block";
  });
  left_arrow.addEventListener("click", () => {
    if (cont < 1) {
      cont = 1;
    }
    cont -= 1;

    if (cont === 0) {
      diploma_box.style.visibility = "visible";
      diploma_box.style.left = "76px";
      bachelor_box.style.left = "475px";
      master_box.style.visibility = "hidden";
      console.log(cont);
      left_arrow.style.display = "none";
    } else if (cont === 1) {
      bachelor_box.style.visibility = "visible";
      bachelor_box.style.left = "38px";
      master_box.style.left = "475px";
      right_arrow.style.display = "block";
    }
  });
} else if (screen.width === 425) {
  right_arrow.addEventListener("click", () => {
    if (cont >= 2) {
      cont = 1;
    }
    cont += 1;

    if (cont === 1) {
      bachelor_box.style.visibility = "visible";
      bachelor_box.style.left = "66px";
      diploma_box.style.left = "-313px";
    } else if (cont === 2) {
      bachelor_box.style.left = "-356px";
      master_box.style.left = "76px";
      master_box.style.visibility = "visible";
      right_arrow.style.display = "none";
    }
    left_arrow.style.display = "block";
  });
  left_arrow.addEventListener("click", () => {
    if (cont < 1) {
      cont = 1;
    }
    cont -= 1;
    if (cont === 0) {
      diploma_box.style.visibility = "visible";
      diploma_box.style.left = "98px";
      bachelor_box.style.left = "475px";
      master_box.style.visibility = "hidden";
      left_arrow.style.display = "none";
    } else if (cont === 1) {
      bachelor_box.style.visibility = "visible";
      bachelor_box.style.left = "72px";
      master_box.style.left = "475px";
    }
    right_arrow.style.display = "block";
  });
} else if (screen.width === 768) {
  right_arrow.addEventListener("click", () => {
    diploma_box.style.left = "-313px";
    bachelor_box.style.left = "62px";
    master_box.style.left = "43px";
    master_box.style.left = "423px";
    right_arrow.style.display = "none";
    left_arrow.style.display = "block";
  });

  left_arrow.addEventListener("click", () => {
    right_arrow.style.display = "block";
    master_box.style.left = "820px";
    diploma_box.style.left = "62px";
    bachelor_box.style.left = "346px";
    left_arrow.style.display = "none";
  });
}
