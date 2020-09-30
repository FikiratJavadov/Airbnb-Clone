// //SCROLL REGULATION:
$(document).ready(function () {
    /* $(window).scroll(function (event) {
        let position = $(window).scrollTop();
        console.log(position);
        if (position > 0) {
            $(".header-home").addClass("drop-nav");
            changeColor($("a"), "black");
            changeColor($(".nav-logo h4"), "black");
            changeColor($(".nav-logo .fa-airbnb"), "#ff5a5f");
            changeColor($(".btn-create-list a"), "white");
            changeBg($(".btn-create-list a"), "#ff5a5f");
            $(".nav-logo img").attr("src", "img/header-logo2.png");
            changeBg($(".header-home"), "white");




        } else {
            $(".header-home").removeClass("drop-nav");
            changeColor($("a"), "white");
            changeColor($(".nav-logo h4"), "white");
            changeColor($(".nav-logo .fa-airbnb"), "white");
            changeColor($(".btn-create-list a"), "#ff5a5f");
            changeBg($(".btn-create-list a"), "white");
            $(".nav-logo img").attr("src", "img/header-logo1.png");
            changeBg($(".header-home"), "transparent");
        }
    }); */


    $(".collapse-ul .1").click(function () {
        $(".collapse-content .first").fadeOut();
    });

    $(".owl-one").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
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


    $('.owl-two').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    $('.owl-three').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    $('.owl-four').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });





});



// //TODO FUNCTIONS:

//CHANGE COLORS:
function changeColor(tag, color) {
    tag.css("color", color);
}
//CHANGE BG-COLORS:
function changeBg(tag, color) {
    tag.css("backgroundColor", color);
}


//! SELECTORS:
//For Burger Menu
const burger = document.querySelector(".burger");
const header = document.querySelector("header");
const firstSection = document.querySelector("#find-your-dream");
//For Modal Window:
const loginBtb = document.querySelector(".log-desktop");
const modalWindow = document.querySelector(".modal-window");
const closeWindow = document.querySelector(".close-window")


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
    console.log(target);

    if (target.classList.contains("modal-window") || target.classList.contains("close-window")) {
        modalWindow.classList.remove("show");
        document.querySelector("body").style.overflowY = "";
    }
});