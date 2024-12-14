let bars = document.querySelector(".bars");
let items = document.querySelector(".items");
let dwopbtn = document.querySelector(".dwopbtn");
let dwopdownItems = document.querySelector(".ulitems");

bars.addEventListener("click", function(){
  items.classList.toggle('active');
})

dwopbtn.addEventListener("click", function(){
  dwopdownItems.classList.toggle('dropactive');
})