let inp = document.querySelector("input");

let para = document.querySelector("p");

inp.addEventListener("input", function()
{
    para.innerText = inp.value; 
   inp.style.backgroundColor = "black"; 
   inp.style.color = "white"; 
   para.style.backgroundColor = "Green"; 
   para.style.color = "white"; 
   
});