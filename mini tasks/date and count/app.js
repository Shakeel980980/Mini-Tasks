         
let count = localStorage.getItem('count') || 0;
let btn= document.querySelector('.count');

btn.addEventListener("click", function(){
  count ++;
  localStorage.setItem('count', count);
  // localStorage.clear();
  updateBtn();
});

function updateBtn(){
    if(count % 2 === 0){
      btn.classList.remove('js-odd');
      btn.classList.add('js-even');
    }else{
      btn.classList.remove('js-even');
      btn.classList.add('js-odd');
    }
    btn.innerText = count;
    };
updateBtn();



function greetings(name = "dear"){
let h3 = document.querySelector('h3');
let date = new Date();
let hours = date.getHours();

if(hours > 5 && hours < 12){
  h3.innerText = `Good Morning ${name}`;
}else if(hours == 12){
  h3.innerText = `Good Noon ${name}`;
}else if(hours > 12 && hours < 17){
  h3.innerText = `Good Evening ${name}`;
} else{
  h3.innerText = `Good Night ${name}`;
}
}
greetings();