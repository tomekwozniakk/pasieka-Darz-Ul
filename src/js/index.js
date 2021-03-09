import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context("../assets/img/", true));

// slider in "about" section

let articles = [];

function getArticles() {
  for (
    let i = 0;
    i < document.querySelectorAll(".about__article").length;
    i++
  ) {
    let article = document.querySelectorAll(".about__article")[i];
    articles.push(article);
  }
}
getArticles();

let circles = [];

function getCircles() {
  for (let i = 0; i < document.querySelectorAll(".about__circle").length; i++) {
    let circle = document.querySelectorAll(".about__circle")[i];
    circles.push(circle);
  }
}

getCircles();
// getting elements

const BtnLeft = document.querySelector(".about__slider-button--left");
const BtnRight = document.querySelector(".about__slider-button--right");
const articlesContainer = document.querySelector(".about-carousel");
let i = 0;
const articleWidth = articles[0].getBoundingClientRect().width;
const articleGap = 16;
console.log(articleWidth);

// add event listeners on buttons

BtnLeft.addEventListener(
  "click",
  throttle(function () {
    if (i === 0) {
      return;
    }
    articlesContainer.scrollBy(-(articleWidth + articleGap), 0);
    circles[i].classList.remove("about__circle--active");
    i--;
    circles[i].classList.add("about__circle--active");
    let header = articles[i].querySelector(".about__images");
    header.innerHTML = `<div class="about__image-container">
      <img src="img/marian.jpg" alt="Prezes pasieki we własnej osobie"
            class="about__image about__image--first">
      </div>
      <div class="about__image-container">
      <img src="img/working_in_sunset.jpg" alt="Marian pracuje przy ulach na tle zachodzącego słońca"
      class="about__image about__image--second">
      </div>
      <div class="about__image-container">
      <img src="img/irena.jpg"
      alt="Prezesowa pasieki we własnej osobie" class="about__image about__image--third">
      </div>`;
    switcher();
    console.log(i);
  }, 500)
);

BtnRight.addEventListener(
  "click",
  throttle(function () {
    if (i === articles.length - 1) {
      return;
    }
    articlesContainer.scrollBy(articleWidth + articleGap, 0);

    circles[i].classList.remove("about__circle--active");
    i++;
    circles[i].classList.add("about__circle--active");
    let header = articles[i].querySelector(".about__images");
    header.innerHTML = `<div class="about__image-container">
        <img src="img/marian.jpg" alt="Prezes pasieki we własnej osobie"
        class="about__image about__image--first">
        </div>
        <div class="about__image-container">
        <img src="img/working_in_sunset.jpg" alt="Marian pracuje przy ulach na tle zachodzącego słońca"
        class="about__image about__image--second">
        </div>
        <div class="about__image-container">
        <img src="img/irena.jpg"
        alt="Prezesowa pasieki we własnej osobie" class="about__image about__image--third">
        </div>`;
    switcher();
    console.log(i);
  }, 500)
);

// switching images

function switchImage(image, urls, alts) {
  let sources;
  let descriptions;
  let timer;
  sources = urls;
  descriptions = alts;
  let i = 0;
  timer = setInterval(function () {
    if (i >= sources.length) {
      i = 0;
    }
    image.alt = descriptions[i];
    image.src = sources[i++];
  }, 6000);
}

function switcher() {
  let activeArticle = articles[i];
  let imageFirst = activeArticle.querySelector(".about__image--first");
  let imageSecond = activeArticle.querySelector(".about__image--second");
  let imageThird = activeArticle.querySelector(".about__image--third");

  switchImage(
    imageFirst,
    ["img/herbal_board.jpg",
     "img/smoke.jpg",
     "img/irena2.jpg", 
     "img/marian.jpg"],
    [
      "Świeże zioła na stole w ogrodzie",
      "Rozpalanie podkurzacza",
      "Irena podczas miodobrania 2015",
      "Prezes pasieki we własnej osobie",
    ]
  );

  switchImage(
    imageSecond,
    [
      "img/honey_jars_2.jpg",
      "img/honeycomb.jpg",
      "img/fence.jpg",
      "img/working_in_sunset.jpg",
    ],
    [
      "Słoiki miodu już z etykietami czekają na chętnych",
      "Ramka z plastrem miodu i pszczołą",
      "Płot widziany zza naszej działki",
      "Marian pracuje przy ulach na tle zachodzącego słońca",
    ]
  );

  switchImage(
    imageThird,
    [
      "img/winter_calm.jpg",
      "img/marian2.jpg",
      "img/vegetables.jpg",
      "img/irena.jpg",
    ],
    [
      "Nasze ule w zimie - cisza, spokój i kołderka ze śniegu",
      "Marian pozuje z owocem pracy swojej i podopiecznych - 2015",
      "Permakulturowe zbiory - tutaj rzodkiewka",
      "Prezesowa pasieki we własnej osobie",
    ]
  );
}

switcher();

let historyArticles = [];

function getHistoryArticles() {
  for (
    let i = 0;
    i < document.querySelectorAll(".history__article").length;
    i++
  ) {
    let historyArticle = document.querySelectorAll(".history__article")[i];
    historyArticles.push(historyArticle);
  }
}

getHistoryArticles();

// Throttle scroll function
function throttle(callback, limit) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(function () {
        waiting = false;
      }, limit);
    }
  };
}

// scroll function with implemented throttle
window.addEventListener(
  "scroll",
  throttle(function () {
    let scrollTop = window.pageYOffset;

    for (let i = 0; i < historyArticles.length; i++) {
      let rect = historyArticles[i].getBoundingClientRect();
      let top = scrollTop + rect.top;
      console.log("scrollTop");

      if (
        top <=
        scrollTop + window.innerHeight + historyArticles[i].offsetHeight / 4
      ) {
        if (
          !historyArticles[i].classList.contains("history__article--active")
        ) {
          historyArticles[i].classList.remove("history__article--inactive");
          historyArticles[i].classList.remove("history__article--active");
          void historyArticles[i].offsetWidth;
          historyArticles[i].classList.add("history__article--active");
        }
      } else {
        if (
          !historyArticles[i].classList.contains("history__article--inactive")
        ) {
          historyArticles[i].classList.remove("history__article--active");
          historyArticles[i].classList.remove("history__article--inactive");
          void historyArticles[i].offsetWidth;
          historyArticles[i].classList.add("history__article--inactive");
        }
      }
    }
  }, 200)
);

// Gallery slider
const gap = 16;
const imgWidth = 180;

const carousel = document.querySelector(".gallery__carousel");
const prev = document.querySelector(".gallery__slider-previous");
const next = document.querySelector(".gallery__slider-next");

next.addEventListener("click", function (e) {
  carousel.scrollBy(imgWidth + gap, 0);
});

prev.addEventListener("click", function (e) {
  carousel.scrollBy(-(imgWidth + gap), 0);
});

// gallery swap big image on click

let imagesSmall = [];

function getImages() {
  for (
    let i = 0;
    i < document.querySelectorAll(".gallery__image-small").length;
    i++
  ) {
    let imageSmall = document.querySelectorAll(".gallery__image-small")[i];
    imagesSmall.push(imageSmall);
  }
}
getImages();

let imageBig = document.querySelector('.gallery__image-big');
let imagePopup = document.querySelector('.gallery__popup-image');
let popup = document.querySelector('.gallery__popup');
let popupText = document.querySelector('.gallery__popup-description');
let cross = document.querySelector('.gallery__popup-icon-container');
let popupPrevious = document.querySelector('.gallery__popup-slider--previous');
let popupNext = document.querySelector('.gallery__popup-slider--next');

for (let i = 0; i < imagesSmall.length; i++) {
  imagesSmall[i].addEventListener("click", function () {
    let newSource = `${this.src.slice(0, -11)}.jpg`;
    imageBig.src = newSource;
    imageBig.alt = this.alt;
  });
}

imageBig.addEventListener("click", function(){
  document.body.classList.add('modal-open');
  popup.classList.remove('gallery__popup');
  popup.classList.add('gallery__popup--active');
  imagePopup.src = imageBig.src;
  imagePopup.alt = imageBig.alt;
  popupText.innerHTML = imagePopup.alt;
});

cross.addEventListener("click", function(){
  document.body.classList.remove('modal-open');
  popup.classList.remove('gallery__popup--active');
  popup.classList.add('gallery__popup');
})

popupPrevious.addEventListener('click', function(){
  for (let i = 0; i < imagesSmall.length; i++){
    if(`${imagesSmall[i].src.slice(0, -11)}.jpg` === imagePopup.src){
      if(i>0){
        i--;
        console.log(i);
        imagePopup.src = `${imagesSmall[i].src.slice(0, -11)}.jpg`;
        imagePopup.alt = imagesSmall[i].alt;
        popupText.innerHTML = imagePopup.alt;
      } else{
       return;
      }
    }
  }
})

popupNext.addEventListener('click', function(){
  for (let i = 0; i < imagesSmall.length; i++){
    if(`${imagesSmall[i].src.slice(0, -11)}.jpg` === imagePopup.src){
      if(i === imagesSmall.length - 1){
        return;
      }
      else{
        i++;
        console.log(i);
        imagePopup.src = `${imagesSmall[i].src.slice(0, -11)}.jpg`;
        imagePopup.alt = imagesSmall[i].alt;
        popupText.innerHTML = imagePopup.alt;
        return;
      }
    }
  }
})