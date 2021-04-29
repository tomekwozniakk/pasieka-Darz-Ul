import { setTimeout } from "core-js";
import "../scss/main.scss";

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

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
let articleWidth = articles[0].getBoundingClientRect().width;
const articleGap = 16;
let scrollCounter = document.querySelector('.nav__counter');


// event listener for resizing

let windowWidth = window.innerWidth;

window.addEventListener('resize', function(){
  let newWindowWidth = window.innerWidth;
  if(newWindowWidth !== windowWidth){
  articleWidth = articles[0].getBoundingClientRect().width;
  articlesContainer.scrollTo(0, 0);
  circles[i].classList.remove("about__circle--active");
  i=0;
  circles[i].classList.add("about__circle--active");}
  else{return}
})

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
  for(let i=0; i<articles.length;i++){
    let imageFirst = articles[i].querySelector(".about__image--first");
  let imageSecond = articles[i].querySelector(".about__image--second");
  let imageThird = articles[i].querySelector(".about__image--third");

  switchImage(
    imageFirst,
    [
      "img/herbal_board.jpg",
      "img/smoke.jpg",
      "img/irena2.jpg",
      "img/marian.jpg",
    ],
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
}

switcher();

let historyArticles = [];
let imgUrls = [];

function getHistoryArticles() {
  for (
    let i = 0;
    i < document.querySelectorAll(".timeline__element").length;
    i++
  ) {
    let historyArticle = document.querySelectorAll(".timeline__element")[i];
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

// get active articles

let activeArticles = [];
function getActiveArticles() {
  for (
    let i = 0;
    i < document.querySelectorAll(".timeline__element--active").length;
    i++
  ) {
    let activeArticle = document.querySelectorAll(".timeline__element--active")[
      i
    ];
    activeArticles.push(activeArticle);
  }
}

// preload images
let images = [];
function getActiveImages(){
  for(let i=0; i<historyArticles.length; i++){
    let image = historyArticles[i].querySelector('.timeline__image');
    images.push(image);
  }
}
getActiveImages();

let preloadedImages = [];

function preloadImages(){
  for(let i=0; i<historyArticles.length; i++){
    preloadedImages[i] = new Image();
    preloadedImages[i].src = images[i].src;
  }
}

preloadImages();
// console.log(preloadedImages)

// scroll function on scrollcounter
let scrollBottom;
let pageHeight;
window.addEventListener("scroll", function(){
  scrollBottom = window.pageYOffset+window.innerHeight;
  pageHeight = document.documentElement.scrollHeight;
  if(window.pageYOffset<window.innerHeight){
    scrollCounter.style.display = 'none';
  }
  else{
    scrollCounter.style.display = 'block';
    scrollCounter.style.width = `${(scrollBottom/pageHeight)*100}%`;
    
  }
})


// scroll function with implemented throttle
window.addEventListener(
  "scroll",
  throttle(function () {
    let section = document.querySelector(".history");
    let scrollTop = window.pageYOffset;
    let lastActiveImage = preloadedImages[0];
    
    for(let i = 0; i < historyArticles.length; i++) {
      let articleTitle = historyArticles[i].querySelector(".timeline__content-title");
      let articleTop =
        historyArticles[i].getBoundingClientRect().top + scrollTop - 300;
      if (articleTop <= scrollTop) {
        historyArticles[i].classList.add("timeline__element--active");
        articleTitle.classList.add("timeline__content-title--active");
        activeArticles = [];
        getActiveArticles();
        lastActiveImage = preloadedImages[activeArticles.length - 1];
        section.style.backgroundImage = ` url(${lastActiveImage.src})`;
      } else {
        historyArticles[i].classList.remove("timeline__element--active");
        articleTitle.classList.remove("timeline__content-title--active");
      }
      
    }
    
  }, 20)
);

// offer section popup

const popupOffer = document.querySelector('.offer__popup-wrapper');
const popupOfferImg = document.querySelector('.offer__popup-image');
const popupOfferDescr = document.querySelector('.offer__popup-description');
let offerElements = [];
const close = document.querySelector('.offer__popup-icon-container');

function getOfferElements(){
  for(let i=0; i < document.querySelectorAll(".offer__element").length;
  i++){
    let offerElement = document.querySelectorAll(".offer__element")[i];
    offerElements.push(offerElement);
    
  }
}
getOfferElements();

for (let i = 0; i < offerElements.length; i++) {
  offerElements[i].addEventListener("click", function () {
    document.body.classList.add("modal-open");
    popupOffer.classList.remove('offer__popup-wrapper');
    popupOffer.classList.add('offer__popup-wrapper--active');
    let newSrc = window.getComputedStyle(offerElements[i]).backgroundImage.slice(5,-2);
    popupOfferImg.src = newSrc;
    popupOfferDescr.innerHTML = offerElements[i].querySelector('.offer__element-description').innerHTML;
  }
  )}

  close.addEventListener("click", function(){
    document.body.classList.remove("modal-open");
    popupOffer.classList.add('offer__popup-wrapper');
    popupOffer.classList.remove('offer__popup-wrapper--active');
  })


// Gallery slider
const gap = 16;
const imgWidth = 160;

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

let imageBig = document.querySelector(".gallery__image-big");
let imagePopup = document.querySelector(".gallery__popup-image");
let popup = document.querySelector(".gallery__popup");
let popupText = document.querySelector(".gallery__popup-description");
let cross = document.querySelector(".gallery__popup-icon-container");
let popupPrevious = document.querySelector(".gallery__popup-slider--previous");
let popupNext = document.querySelector(".gallery__popup-slider--next");

for (let i = 0; i < imagesSmall.length; i++) {
  imagesSmall[i].addEventListener("click", function () {
    let newSource = `${this.src.slice(0, -11)}.jpg`;
    imageBig.src = newSource;
    imageBig.alt = this.alt;
  });
}

imageBig.addEventListener("click", function () {
  if(window.innerWidth >= 768){
  document.body.classList.add("modal-open");
  popup.classList.remove("gallery__popup");
  popup.classList.add("gallery__popup--active");
  imagePopup.src = imageBig.src;
  imagePopup.alt = imageBig.alt;
  popupText.innerHTML = imagePopup.alt;
  } else{return}
});

cross.addEventListener("click", function () {
  document.body.classList.remove("modal-open");
  popup.classList.remove("gallery__popup--active");
  popup.classList.add("gallery__popup");
});

popupPrevious.addEventListener("click", function () {
  for (let i = 0; i < imagesSmall.length; i++) {
    if (`${imagesSmall[i].src.slice(0, -11)}.jpg` === imagePopup.src) {
      if (i > 0) {
        i--;
        imagePopup.src = `${imagesSmall[i].src.slice(0, -11)}.jpg`;
        imagePopup.alt = imagesSmall[i].alt;
        popupText.innerHTML = imagePopup.alt;
      } else {
        return;
      }
    }
  }
});

popupNext.addEventListener("click", function () {
  for (let i = 0; i < imagesSmall.length; i++) {
    if (`${imagesSmall[i].src.slice(0, -11)}.jpg` === imagePopup.src) {
      if (i === imagesSmall.length - 1) {
        return;
      } else {
        i++;
        imagePopup.src = `${imagesSmall[i].src.slice(0, -11)}.jpg`;
        imagePopup.alt = imagesSmall[i].alt;
        popupText.innerHTML = imagePopup.alt;
        return;
      }
    }
  }
});

