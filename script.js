javascript
const menu=document.getElementById("menuButton");
const sidebar=document.getElementById("sidebar");

menu.onclick=function(){

sidebar.classList.toggle("open");

}

const images=[

"images/projekt1.jpg",

"images/projekt2.jpg",

"images/projekt3.jpg"

];

let index=0;

const slide=document.getElementById("slideImage");

setInterval(function(){

index++;

if(index>=images.length){

index=0;

}

slide.src=images[index];

},4000);

window.addEventListener("scroll",function(){

const info=document.querySelector(".info");

const pos=info.getBoundingClientRect().top;

if(pos<window.innerHeight-150){

info.classList.add("show");

}

});