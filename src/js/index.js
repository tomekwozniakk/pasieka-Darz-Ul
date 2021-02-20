import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

// slider in "about" section

let articles = [];

function getArticles(){
    for (let i = 0; i < document.querySelectorAll('.about__article').length; i++){
        let article = document.querySelectorAll('.about__article')[i];
        articles.push(article);
    };
}
getArticles();

let circles = [];

function getCircles(){
    for (let i = 0; i < document.querySelectorAll('.about__circle').length; i++){
        let circle = document.querySelectorAll('.about__circle')[i];
        circles.push(circle);
}}


getCircles();
// getting elements

const BtnLeft = document.querySelector('.about__slider-button--left');
const BtnRight = document.querySelector('.about__slider-button--right');
const circleDiv = document.querySelector('.about__circle-container');


// animating circles
function resetCircles(){
    circleDiv.classList.remove('about__circle-container--active')
}

// add event listeners on buttons

BtnLeft.addEventListener('click', function(){
    let activeArticle = document.querySelector('.about__article--active');
    let i = articles.indexOf(activeArticle, 0);
    articles[i].classList.remove('about__article--active');
    circles[i].classList.remove('about__circle--active');

    if (i === 0) {
        articles[articles.length - 1].classList.add('about__article--active');
        circles[articles.length - 1].classList.add('about__circle--active');
    } else {
        articles[i - 1].classList.add('about__article--active');
        circles[i - 1].classList.add('about__circle--active');
    }
    circleDiv.classList.add('about__circle-container--active');
    window.setTimeout(resetCircles, 300, true);
})

BtnRight.addEventListener('click', function(){
    let activeArticle = document.querySelector('.about__article--active');
    let i = articles.indexOf(activeArticle, 0);
    articles[i].classList.remove('about__article--active');
    circles[i].classList.remove('about__circle--active');
    
    if (i === articles.length - 1) {
        articles[0].classList.add('about__article--active');
        circles[0].classList.add('about__circle--active');
    } else {
        articles[i + 1].classList.add('about__article--active');
        circles[i + 1].classList.add('about__circle--active');
    }
    circleDiv.classList.add('about__circle-container--active');
    window.setTimeout(resetCircles, 300, true);
});

