let form=document.getElementById("form");
let input = document.getElementById("input");
let emptyText = document.querySelector(".empty-text");
let posts = document.querySelector(".posts");



form.addEventListener("submit", function(event){
event.preventDefault();
console.log("button clicked");
formValication();
});

function formValication(){
  if(input.value === ''){
    emptyText.innerHTML = "Post cannot be blank";
  }else{
    emptyText.innerHTML = "";
    acceptDataFormInupt();
  }
};

let storeDataFromInput={}; // created object to store data that will come form input 
let acceptDataFormInupt = ()=>{
  storeDataFromInput['text'] = input.value;
  createPost();
}


let createPost = ()=>{
  posts.innerHTML += `
  <div class="post">
  <p> ${storeDataFromInput.text}</p>
  <span class="dlt-edit-Btn">
    <i onclick="editPost(this)" class="fas fa-edit edit-button"></i>
    <i onclick ="deletePost(this)" class="fas fa-trash-alt" id="delete-button"></i>
  </span>
</div>`;
input.value = "";
}


let deletePost = function(event){
  event.parentElement.parentElement.remove();
};

let editPost = (event) => {
  input.value = event.parentElement.previousElementSibling.innerHTML;
  event.parentElement.parentElement.remove();
};