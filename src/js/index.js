import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

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
const circleDiv = document.querySelector(".about__circle-container");
const articlesContainer = document.querySelector(".about-carousel");
let i = 0;
const articleWidth = articles[0].getBoundingClientRect().width;
const articleGap = 16;
console.log(articleWidth);


// add event listeners on buttons

BtnLeft.addEventListener("click", function (e) {
  if(i===0){
    return;
  }
  articlesContainer.scrollBy(-(articleWidth + articleGap), 0);
  circles[i].classList.remove("about__circle--active");
  i--;
  circles[i].classList.add("about__circle--active");

  let header = articles[i].querySelector(".about__images");
  header.innerHTML = `<div class="about__image-container">
              <img src="img/party_time.jpg" alt="" class="about__image about__image--first">
            </div>
            <div class="about__image-container">
              <img src="img/smoke.jpg" alt="" class="about__image about__image--second">
            </div>
            <div class="about__image-container">
              <img src="img/working_in_sunset.jpg" alt="" class="about__image about__image--third">
            </div>`;
  
  
  switcher();
  console.log(i);
});

BtnRight.addEventListener("click", function () {
  if(i === articles.length - 1){
    return;
  }
  articlesContainer.scrollBy(articleWidth + articleGap, 0);

  circles[i].classList.remove("about__circle--active");
  i++;
  circles[i].classList.add("about__circle--active");
  let header = articles[i].querySelector(".about__images");
  header.innerHTML = `<div class="about__image-container">
              <img src="img/party_time.jpg" alt="" class="about__image about__image--first">
            </div>
            <div class="about__image-container">
              <img src="img/smoke.jpg" alt="" class="about__image about__image--second">
            </div>
            <div class="about__image-container">
              <img src="img/working_in_sunset.jpg" alt="" class="about__image about__image--third">
            </div>`;
  
  
  switcher();
  console.log(i);
});

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
    [
      "img/garden.jpg",
      "img/apples.jpg",
      "img/table.jpg",
      "img/party_time.jpg"
    ],
    ["our garden", 
    "red apples on a tree", 
    "table with food",
    "party in our backyard"]
  );

  switchImage(imageSecond, [
    "img/backyard.jpg",
    "img/bread_sliced.jpg",
    "img/fence.jpg",
    "img/smoke.jpg"
  ],
  ["our backyard",
  "fresh sliced bread",
  "fence",
  "Marian starting up a bee smoker"
  ]
  );

  switchImage(imageThird, [
    "img/house_sunset.jpg",
    "img/backyard_2.jpg",
    "img/parcel.jpg",
    "img/working_in_sunset.jpg"
  ],
  ["sunset behind apihouse",
  "our backyard",
  "view on the backyard from the back",
  "Marian working with beehives with sunset at the back"
]);
}

switcher();


let historyArticles = []

function getHistoryArticles() {
  for (let i = 0; i < document.querySelectorAll(".history__article").length; i++) {
    let historyArticle = document.querySelectorAll(".history__article")[i];
    historyArticles.push(historyArticle);
  }
  
}

getHistoryArticles();


window.addEventListener('scroll', function(){
  let scrollTop = window.pageYOffset;
  
  for(let i = 0; i < historyArticles.length;i++ ){
  let rect = historyArticles[i].getBoundingClientRect();
  let top = scrollTop + rect.top;
  
  if(top<=scrollTop + window.innerHeight + (historyArticles[i].offsetHeight/4)){
    if(!historyArticles[i].classList.contains('history__article--active')){
    historyArticles[i].classList.remove('history__article--inactive');
    historyArticles[i].classList.remove('history__article--active');
    void historyArticles[i].offsetWidth;
    historyArticles[i].classList.add('history__article--active');
    }
  }
  else{
    if(!historyArticles[i].classList.contains('history__article--inactive')){
      historyArticles[i].classList.remove('history__article--active');
    historyArticles[i].classList.remove('history__article--inactive');
    void historyArticles[i].offsetWidth;
    historyArticles[i].classList.add('history__article--inactive');
      ;
    } 
 
}
}
})

// Gallery slider
const gap = 16;
const imgWidth = 180;

const carousel = document.querySelector('.gallery__carousel');
const content = document.querySelector('.gallery__content');
const prev = document.querySelector('.gallery__slider-previous');
const next = document.querySelector('.gallery__slider-next');

next.addEventListener("click", function(e){
  carousel.scrollBy(imgWidth + gap, 0);
})

prev.addEventListener("click", function(e){
  carousel.scrollBy(-(imgWidth + gap), 0);
})

// gallery swap big image on click

let imagesSmall = []

function getImages(){
  for(let i = 0; i < document.querySelectorAll('.gallery__image-small').length; i++){
    let imageSmall = document.querySelectorAll('.gallery__image-small')[i];
    imagesSmall.push(imageSmall);
  }
}
getImages();

let imageBig = document.querySelector('.gallery__image-big');

for(let i = 0; i < imagesSmall.length; i++){
  imagesSmall[i].addEventListener('click', function(){
    imageBig.src = this.src;
    imageBig.alt = this.alt;
  })
}