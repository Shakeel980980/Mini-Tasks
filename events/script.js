let header = document.querySelector(".header");
let button = document.querySelector(".SignUp");
let input = document.querySelector("#input");

// header.addEventListener("dblclick", function(){
//   header.style.backgroundColor = "green";
// })

// header.addEventListener("contextmenu", function(){
//   header.style.backgroundColor = "green";
// })

// header.addEventListener("mouseenter", function(){
//   header.style.backgroundColor = "green";
// })

// header.addEventListener("mouseout", function(){
//   header.style.backgroundColor = "green";
// })

// header.addEventListener("mousedown", function(){
//   header.style.backgroundColor = "green";
// })

// input.addEventListener("keyup", function(){
//   header.style.backgroundColor = "green";
// })

input.addEventListener("keyup", function(){
  input.style.backgroundColor = "green";
  input.style.color = "white";
 input.value = input.value.toUpperCase();
});

// function onload(){
//   alert("Thanks You for visiting Our School Progenitor School Burewala");
// }
