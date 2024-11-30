let todolist =[
  {
    item : "heello wolrd",
    date : "10/10/2024",
  },
  {
    item : "how are  yoou",
    date : "11/10/2024",
  }
];

let inputText = document.querySelector("#input-text");
let inputDate = document.querySelector("#date-input");
let addBtn = document.querySelector(".btn-add");
  dispayItem ();

addBtn.addEventListener("click", function(){
  let todoItem = inputText.value;
  let todoDate = inputDate.value;
  todolist.push({item: todoItem, date: todoDate});
  inputText.value='';
  inputDate.value='';

  console.log(todolist);
dispayItem ();
});

function dispayItem (){
  let textItems = document.querySelector(".text-items");
  let newHTML ='';
  for(let i = 0; i < todolist.length; i++){
    let item = todolist[i].item; 
    let date = todolist[i].date;
  
    newHTML +=`
    <span>${item}</span>
    <span>${date}</span>
    <button onclick ="deleteBtn(${i});"  class="btn">Delete</button>
    <button onclick ="editBtn(${i});" class="btn">Edit</button>
    `;
  }
  textItems.innerHTML = newHTML;
};


function deleteBtn(i){
  todolist.splice(i, 1); 
  dispayItem ();
}
function editBtn(i){
  inputText.value =  todolist[i].item;
  todolist.splice(i, 1); 
  dispayItem ();

}
