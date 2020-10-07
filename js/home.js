// //SCROLL REGULATION::
$(document).ready(function () {
  let widthLimit = 1023;
  let windowWidth = $(window).innerWidth();

  console.log(windowWidth);

  $(window).scroll(function (event) {
    let position = $(window).scrollTop();
    if (position > 0) {
      $(".wh").addClass("drop-nav");
      changeColor($(".wh .desktop-ul a"), "black");
      changeColor($(".wh .nav-logo h4"), "black");
      changeColor($(".wh .nav-logo .fa-airbnb"), "#ff5a5f");
      changeColor($(".wh .btn-create-list a"), "white");
      // changeColor($(".wh .log-desktop .fa-user"), "black");
      $(".wh .log-desktop .fa-user").css("cssText", "color:black !important;");
      changeColor($(".wh .btn-create-list .fa-plus"), "white");
      $(".wh .btn-create-list .fa-plus").css(
        "cssText",
        "color:white !important;"
      );
      changeColor($(".wh .btn-create-list span"), "white");
      changeBg($(".wh .btn-create-list a"), "#ff5a5f");
      $(".wh .nav-logo .img1").attr("src", "img/header-logo2.png");
      changeBg($(".wh"), "white");
    } else {
      $(".wh").removeClass("drop-nav");
      changeColor($(".wh a"), "white");
      changeColor($(".wh .nav-logo h4"), "white");
      changeColor($(".wh .nav-logo .fa-airbnb"), "white");
      changeColor($(".wh .btn-create-list a"), "#ff5a5f");
      changeColor($(".wh .log-desktop .fa-user"), "white");
      changeColor($(".wh .btn-create-list .fa-plus"), "#ff5a5f");
      changeColor($(".wh .btn-create-list span"), "#ff5a5f");
      changeBg($(".wh .btn-create-list a"), "white");
      $(".wh .nav-logo .img1").attr("src", "img/header-logo1.png");
      changeBg($(".wh"), "transparent");
    }
  });

  //Read More:

  $("#Luxury .overlay").click(function (e) {
    e.preventDefault();
    $(".colp-none").slideToggle();
    $("#Luxury .overlay span").toggleClass("rotate");
  });

  //Carousel
  $(".owl-one").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    smartSpeed: 900,
    /* slideTransition: "0.2s", */
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-two").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    smartSpeed: 900,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".owl-three").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    smartSpeed: 900,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".owl-four").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    smartSpeed: 900,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".owl-five").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    smartSpeed: 900,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1025: {
        items: 4,
      },
    },
  });

  $(".owl-five .owl-prev").html('<i class="fa fa-chevron-left"></i>');
  $(".owl-five .owl-prev").addClass("prev-btn");

  $(".owl-five .owl-next").html('<i class="fa fa-chevron-right"></i>');
  $(".owl-five .owl-next").addClass("next-btn");

  function changeColor(tag, color) {
    tag.css("color", color);
  }
  //CHANGE BG-COLORS:
  function changeBg(tag, color) {
    tag.css("backgroundColor", color);
  }
});

window.addEventListener("DOMContentLoaded", (event) => {
  //! SELECTORS:
  //For Burger Menu
  const burger = document.querySelector(".burger");
  const header = document.querySelector("header");
  const firstSection = document.querySelector("#find-your-dream");
  //For Modal Window:
  const loginBtb = document.querySelector(".log-desktop");
  const modalWindow = document.querySelector(".modal-window");
  const closeWindow = document.querySelector(".close-window");
  const ulHead = document.querySelector(".window .head-ul");
  const mainWindow = document.querySelector(".window .effect");
  const heading = document.querySelector(".window .heading h5");
  console.log(heading);

  //! EVENT LISTENERS
  //SLIDE BURGER MENU
  burger.addEventListener("click", function () {
    header.classList.toggle("nav-move");
    firstSection.classList.toggle("nav-move");
    document.querySelector("body").classList.toggle("hidden");
  });

  //OPEN MODAL WINDOW:
  loginBtb.addEventListener("click", function () {
    modalWindow.classList.add("show");
    document.querySelector("body").style.overflowY = "hidden";
  });
  //Close Modal Window
  modalWindow.addEventListener("click", function (event) {
    let target = event.target;

    if (
      target.classList.contains("modal-window") ||
      target.classList.contains("close-window")
    ) {
      modalWindow.classList.remove("show");
      document.querySelector("body").style.overflowY = "";
    }
  });
  //Login/Register:

  ulHead.addEventListener("click", function (event) {
    let target = event.target;

    if (target.classList.contains("lo")) {
      mainWindow.classList.add("boom-now");
      mainWindow.addEventListener("animationend", function () {
        mainWindow.classList.remove("boom-now");
      });
      heading.innerHTML = "Login";
      target.style.backgroundColor = "#f5f5f5";
      target.nextElementSibling.style.backgroundColor = "white";
    }

    if (target.classList.contains("re")) {
      mainWindow.classList.add("boom-now");
      mainWindow.addEventListener("animationend", function () {
        mainWindow.classList.remove("boom-now");
      });
      heading.innerHTML = "Register";
      target.style.backgroundColor = "#f5f5f5";
      target.previousElementSibling.style.backgroundColor = "white";
    }
  });

  //TODO Img Slider:
  //Selectors:
  const imgs = document.querySelectorAll("#Details img");
  const slider = document.querySelector("#Details .absolute-img");
  const imgDiv = document.querySelector("#Details .imgDiv");
  const iconBtn = document.querySelector("#Details .view-photo");

  let dataNum;

  //Create slider for photo-btn:
  iconBtn.addEventListener("click", function () {
    imgDiv.innerHTML = `<img class="w-100" src="img/d1.jpg">
       <i class="ex fas fa-times"></i>
       <p class="counter-info"><span class="counter">1 </span>of 5</p>`;
    slider.style.display = "block";
    header.style.zIndex = "-1";
    document.querySelector("body").style.overflow = "hidden";
    dataNum = 1;
  });

  //CREATE and OPEN IMG SLIDER;
  imgs.forEach((img) => {
    img.addEventListener("click", function () {
      imgDiv.innerHTML = `<img class="w-100" src="img/d${img.dataset.number}.jpg">
       <i class="ex fas fa-times"></i>
       <p class="counter-info"><span class="counter">${img.dataset.number} </span>of 5</p>`;
      slider.style.display = "block";
      header.style.zIndex = "-1";
      document.querySelector("body").style.overflow = "hidden";
      dataNum = Number(img.dataset.number);
    });
  });

  nextSlide();
  prevSlide();

  //Next IMG Slide:
  function nextSlide() {
    const next = document.querySelector(".absolute-img .right");
    next.addEventListener("click", function () {
      dataNum++;
      if (dataNum > 5) {
        dataNum = 1;
      }

      imgDiv.innerHTML = `<img class="w-100" src="img/d${dataNum}.jpg">
                            <i class="ex fas fa-times"></i>
                            <p class="counter-info"><span class="counter">${dataNum} </span>of 5</p>`;
      console.log(dataNum);
    });
  }

  //PrevIMG Slide:
  function prevSlide() {
    const prev = document.querySelector(".absolute-img .left");
    prev.addEventListener("click", function () {
      dataNum--;
      if (dataNum < 1) {
        dataNum = 5;
      }
      imgDiv.innerHTML = `<img class="w-100" src="img/d${dataNum}.jpg">
       <i class="ex fas fa-times"></i>
       <p class="counter-info"><span class="counter">${dataNum} </span>of 5</p>`;
      /*  console.log(dataNum - n); */
    });
  }

  //Close IMG Slide:
  slider.addEventListener("click", function (event) {
    let target = event.target;
    if (
      target.classList.contains("absolute-img") ||
      target.classList.contains("ex")
    ) {
      slider.style.display = "";
      header.style.zIndex = "";
      document.querySelector("body").style.overflow = "";
    }
  });

  //CLOSE IMG SLIDER;
});
