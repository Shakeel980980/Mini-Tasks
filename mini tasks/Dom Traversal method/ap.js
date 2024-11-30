let a = document.querySelector(".traversal-methods");
let ol = document.querySelector(".ol");
let child = document.querySelector(".child-node");


// console.log(a.parentElement);
// a.parentElement.style.backgroundColor ="red";

// ol.parentElement.style.backgroundColor ="red";
//  child.parentElement.style.backgroundColor ="red"; 

// console.log(ol.children);
// ol.children[0].style.backgroundColor ="red";

// console.log(ol.childNodes);
// ol.childNodes.style.backgroundColor ="red";

child.nextElementSibling.style.backgroundColor ="red";
child.previousElementSibling.style.backgroundColor ="red";

ol.firstElementChild.style.backgroundColor ="green";
ol.lastElementChild.style.backgroundColor ="green";