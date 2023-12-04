// start setting box
// click on icon to open setting box
let settingBox = document.querySelector(".setting-box");
let icon = document.querySelector(".setting-icon i");

icon.onclick = (e) => {
  icon.classList.toggle("spin");
  settingBox.classList.toggle("open");
  //  i comment this and back container make this (open)
  // e.stopPropagation();
  // create back container such as on click him nav bar diapear
  //  Note if you use it should you stop click on sitting icon in second time because if clicked you want to clcick again on screen to remove back container
  let back = document.createElement("div");
  back.className = "back";
  document.body.appendChild(back);
  back.addEventListener("click", (e) => {
    back.remove();
    settingBox.classList.toggle("open");
    icon.classList.toggle("spin");
  });
};

// create color bullet
let color = ["#FF9800", "#e91e63", "#009688", "#03A9F4", "#4CAF50"];
for (let i = 0; i < color.length; i++) {
  let lis = document.querySelectorAll(".color ul li");
  lis[i].style.backgroundColor = color[i];
}
// click color (select)

// set btn yes or no
let btnRandomBackgrounds = document.querySelectorAll(".random-background a");

let btnShowBullets = document.querySelectorAll(".show-bullet a");
btnShowBullets.forEach((btn) => {
  btn.onclick = (e) => {
    btnShowBullets.forEach((button) => {
      button.classList.remove("clicked");
    });
    btn.classList.add("clicked");
  };
});
// get color selected and add to local storge
if (window.localStorage.getItem("ColorChosen")) {
  let colorChosen = window.localStorage.getItem("ColorChosen");
  document.documentElement.style.setProperty("--main-color", colorChosen);
  let selectColor = document.querySelectorAll(".color ul li");
  selectColor.forEach((e) => {
    e.classList.remove("select-color");
    if (e.style.backgroundColor === colorChosen) {
      e.classList.add("select-color");
    }
  });
}

let colors = document.querySelectorAll(".color ul li");
colors.forEach((e) => {
  e.onclick = () => {
    let color = e.style.backgroundColor;
    window.localStorage.setItem("ColorChosen", color);
    document.documentElement.style.setProperty("--main-color", color);
    let selectColor = document.querySelectorAll(".color ul li");
    selectColor.forEach((e) => {
      e.classList.remove("select-color");
    });
    e.classList.add("select-color");
  };
});

// choose Yes Or No For Random Backgound And Local Storage
if (localStorage.getItem("Random-Background")) {
  if (localStorage.getItem("Random-Background") == "Yes") {
    let btns = document.querySelectorAll(".random-background a");
    btns.forEach((e) => {
      btns.forEach((button) => {
        button.classList.remove("clicked");
      });
    });
    document.querySelector(".random-background .yes").classList.add("clicked");

    randBack();
  } else {
    let btns = document.querySelectorAll(".random-background a");
    btns.forEach((e) => {
      btns.forEach((button) => {
        button.classList.remove("clicked");
      });
    });
    document.querySelector(".random-background .no").classList.add("clicked");
    clearInterval(stop);
  }
}
//  make clicked btn  and set local storge
let btns = document.querySelectorAll(".random-background a");
btns.forEach((e) => {
  let btns = document.querySelectorAll(".random-background a");
  e.addEventListener("click", () => {
    btns.forEach((button) => {
      button.classList.remove("clicked");
    });
    e.classList.add("clicked");

    if (e.classList.contains("no")) {
      localStorage.setItem("Random-Background", "No");
      clearInterval(stop);
    } else {
      localStorage.setItem("Random-Background", "Yes");
      randBack();
    }
  });
});
function randBack() {
  let LandingArea = document.querySelector(".landing-area");
  stop = setInterval(() => {
    let backgroundRandom = [
      "01.jpg",
      "02.jpg",
      "03.jpg",
      "04.jpg",
      "05.jpg",
      "06.png",
      "07.jpg",
      "08.jpg",
      "09.jpg",
      "10.jpg",
    ];
    let random = Math.floor(Math.random() * backgroundRandom.length);

    LandingArea.style.backgroundImage = `url("../imgs/${backgroundRandom[random]}")`;
  }, 15000);
}

// choose Yes Or No For show bullet And Local Storage
let btnsShowBullet = document.querySelectorAll(".show-bullet a");
let bullet = document.querySelector(".nav-bullet");
if (localStorage.getItem("Show-Bullet")) {
  if (localStorage.getItem("Show-Bullet") === "Yes") {
    btnShowBullets.forEach((button) => {
      button.classList.remove("clicked");
    });
    document.querySelector(".show-bullet .yes").classList.add("clicked");
    bullet.style.display = "block";
  } else {
    btnShowBullets.forEach((button) => {
      button.classList.remove("clicked");
    });
    document.querySelector(".show-bullet .no").classList.add("clicked");
    bullet.style.display = "none";
  }
}
btnShowBullets.forEach((e) => {
  e.onclick = () => {
    btnShowBullets.forEach((button) => {
      button.classList.remove("clicked");
    });
    e.classList.add("clicked");
    if (e.classList.contains("yes")) {
      bullet.style.display = "block";
      localStorage.setItem("Show-Bullet", "Yes");
    } else {
      bullet.style.display = "none";
      localStorage.setItem("Show-Bullet", "No");
    }
  };
});
// click on rest button
let reset = document.querySelector(".setting-container button");
reset.onclick = () => {
  localStorage.clear();
  window.location.reload();
};
// end setting box

let burgerIcon = document.querySelector(".burger-icon");
let links = document.querySelector(".links");
burgerIcon.onclick = () => {
  burgerIcon.classList.toggle("burger-active");
  links.classList.toggle("open");
};

// start about us
let OurSkills = document.querySelector(".Our-Skills");
let progress = document.querySelectorAll(".progress");
let progressPercent = document.querySelectorAll(".progress span");

window.onscroll = () => {
  if (window.scrollY >= OurSkills.offsetTop - 300) {
    progress.forEach((e) => {
      e.style.width = e.getAttribute("data-width");
    });
    progressPercent.forEach((e) => {
      e.innerHTML = e.parentElement.dataset.width;
    });
  } else {
    progress.forEach((e) => {
      e.style.width = "0";
    });
    progressPercent.forEach((e) => {
      e.innerHTML = "0";
    });
  }
};

// end about us
// start  our-gellary
let ourGallery = document.querySelector(".our-gallery");
let imgs = document.querySelectorAll(".our-gallery .image-box img");

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    //create cover
    let cover = document.createElement("div");
    cover.className = "cover";
    //create selected-img
    let div = document.createElement("div");
    div.className = "selected-img";
    // create close button
    let close = document.createElement("span");
    close.innerHTML = "X";
    close.className = "close";
    //name img
    let headingImage = document.createElement("h1");
    headingImage.classList.add("heading");
    headingImage.classList.add("img-name");
    headingImage.appendChild(document.createTextNode(img.getAttribute("alt")));
    //create img
    let photo = document.createElement("img");

    photo.src = img.getAttribute("src");

    // style img
    div.appendChild(close);
    div.appendChild(headingImage);
    div.appendChild(photo);
    cover.appendChild(div);
    document.body.appendChild(cover);
    close.onclick = () => {
      cover.remove();
    };
  });
});
// end  our-gellary
