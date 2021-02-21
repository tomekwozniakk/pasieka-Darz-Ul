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

// add event listeners on buttons

BtnLeft.addEventListener("click", function () {
  let activeArticle = document.querySelector(".about__article--active");
  let i = articles.indexOf(activeArticle, 0);
  articles[i].classList.remove("about__article--active");
  circles[i].classList.remove("about__circle--active");

  if (i === 0) {
    articles[articles.length - 1].classList.add("about__article--active");
    circles[articles.length - 1].classList.add("about__circle--active");
  } else {
    articles[i - 1].classList.add("about__article--active");
    circles[i - 1].classList.add("about__circle--active");
  }
  circleDiv.classList.add("about__circle-container--active");
  activeArticle = document.querySelector(".about__article--active");
  let header = activeArticle.querySelector(".about__images");
  header.innerHTML = `<div class="about__image-container">
              <img src="/src/assets/img/party_time.jpg" alt="" class="about__image about__image--first">
            </div>
            <div class="about__image-container">
              <img src="/src/assets/img/smoke.jpg" alt="" class="about__image about__image--second">
            </div>
            <div class="about__image-container">
              <img src="/src/assets/img/working_in_sunset.jpg" alt="" class="about__image about__image--third">
            </div>`;
  switcher();
});

BtnRight.addEventListener("click", function () {
  let activeArticle = document.querySelector(".about__article--active");

  let i = articles.indexOf(activeArticle, 0);
  articles[i].classList.remove("about__article--active");
  circles[i].classList.remove("about__circle--active");

  if (i === articles.length - 1) {
    articles[0].classList.add("about__article--active");
    circles[0].classList.add("about__circle--active");
  } else {
    articles[i + 1].classList.add("about__article--active");
    circles[i + 1].classList.add("about__circle--active");
  }
  circleDiv.classList.add("about__circle-container--active");
  activeArticle = document.querySelector(".about__article--active");
  let header = activeArticle.querySelector(".about__images");
  header.innerHTML = `<div class="about__image-container">
              <img src="/src/assets/img/party_time.jpg" alt="" class="about__image about__image--first">
            </div>
            <div class="about__image-container">
              <img src="/src/assets/img/smoke.jpg" alt="" class="about__image about__image--second">
            </div>
            <div class="about__image-container">
              <img src="/src/assets/img/working_in_sunset.jpg" alt="" class="about__image about__image--third">
            </div>`;
  switcher();
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
    image.alt = alts[i];
    image.src = sources[i++];
  }, 6000);
}

function switcher() {
  let activeArticle = document.querySelector(".about__article--active");
  let imageFirst = activeArticle.querySelector(".about__image--first");
  let imageSecond = activeArticle.querySelector(".about__image--second");
  let imageThird = activeArticle.querySelector(".about__image--third");

  switchImage(
    imageFirst,
    [
      "/src/assets/img/garden.jpg",
      "/src/assets/img/apples.jpg",
      "/src/assets/img/table.jpg",
      "/src/assets/img/party_time.jpg"
    ],
    ["our garden", 
    "red apples on a tree", 
    "table with food",
    "party in our backyard"]
  );

  switchImage(imageSecond, [
    "/src/assets/img/backyard.jpg",
    "/src/assets/img/bread_sliced.jpg",
    "/src/assets/img/fence.jpg",
    "/src/assets/img/smoke.jpg"
  ],
  ["our backyard",
  "fresh sliced bread",
  "fence",
  "Marian starting up a bee smoker"
  ]
  );

  switchImage(imageThird, [
    "/src/assets/img/house_sunset.jpg",
    "/src/assets/img/backyard_2.jpg",
    "/src/assets/img/parcel.jpg",
    "/src/assets/img/working_in_sunset.jpg"
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
  // console.log(rect.top);
  if(top<scrollTop + window.innerHeight - (historyArticles[i].offsetHeight / 2)){
    if(historyArticles[i].classList.contains('history__article--active')){
      ;
    }
    else{
    historyArticles[i].classList.remove('history__article--inactive');
    historyArticles[i].classList.remove('history__article--active');
    void historyArticles[i].offsetWidth;
    historyArticles[i].classList.add('history__article--active');
    }
  }
  else{
    if(historyArticles[i].classList.contains('history__article--inactive')){
      ;
    } else{
    historyArticles[i].classList.remove('history__article--active');
    historyArticles[i].classList.remove('history__article--inactive');
    void historyArticles[i].offsetWidth;
    historyArticles[i].classList.add('history__article--inactive');
  }
}
}
})