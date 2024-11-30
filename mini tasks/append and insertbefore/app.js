let newElement = document.createElement('li');
let newText = document.createTextNode("Pakistan is our beautiful country!");

newElement.appendChild(newText);


let list = document.querySelector(".list");

// list.appendChild(newElement);

list.insertBefore(newElement,list.children[0]);