// //simple function
function evenOdd(){
  let even=40;
  if(even % 2==0)
{
  console.log(`Even number is: ${even}`);
}else{
  console.log(`Odd number is: ${even}`);
}
}
evenOdd();
// //function using parameters
function evenOdd(number){
  if(number % 2==0)
  {
    console.log(`Even number is: ${number}`);
  }else{
    console.log(`Odd number is: ${number}`);
  }
  }
  evenOdd(45);

//function with return type
function evenOdd(number){
  if(number % 2==0)
  {
    return (`EVEN`);
  }else{
    return (`ODD`);
  }
  }
  console.log(evenOdd(45));
  console.log(evenOdd(30));