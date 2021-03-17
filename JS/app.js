'use strict';

let userName = prompt('Enter your Name');
alert('welcome '+ userName);

alert('answer by typing yes/no');
let x = prompt('is my name start with AB letters?');
let l = 0;
function myName(){
  if (x.toLocaleLowerCase() === 'yes'){
  //console.log('correct');
    alert('correct');
    l=l+1;
  }
  else{
  //console.log('incorrect');
    alert('incorrect');
  }
}
myName();
function myPlace(){
  let y = prompt('do I live in irbid?');

  if (y.toLocaleLowerCase() === 'yes'){
  //console.log('correct');
    alert('correct');
    l=l+1;
  }
  else{
  //console.log('incorrect');
    alert('incorrect');
  }
}
myPlace();
function myStudy(){
  let g = prompt('did I studed computer engineering in AHU?');

  if (g.toLocaleLowerCase() === 'yes'){
  //console.log('correct');
    alert('correct');
    l=l+1;
  }
  else{
  //console.log('incorrect');
    alert('incorrect');
  }
}
myStudy();
function myHair(){
  let a = prompt('Am I bold?');

  if (a.toLocaleLowerCase() === 'no'){
  //console.log('correct');
    alert('correct');
    l=l+1;
  }
  else{
  //console.log('incorrect');
    alert('incorrect');
  }
}
myHair();
function myAge(){
  let b = prompt('Am I 27 years old?');

  if (b.toLocaleLowerCase() === 'yes'){
  //console.log('correct');
    alert('correct');
    l=l+1;
  }
  else{
  //console.log('incorrect');
    alert('incorrect');
  }
}
myAge();
function myGuess(){
  for(let i = 0; i<4 ;i++)
  {
    let number = parseInt(prompt('gues a number between 0 and 20?'));
    if (number === 10 )
    {
      alert('correct');
      l=l+1;
      break;
    }
    else if(number > 10 )
    {
      alert('the number is lower');
    }
    else if (number < 10 )
    {
      alert('the number is higher');
    }
    else
    {
      alert('Enter a number');
    }
  }
  alert('the number is 10');
}
myGuess();
function myColor(){
  let s =['red','blue','black','green'] ;
  for(let a = 0; a < 6 ; a++)
  {
    let arr = prompt('what is my favorit colors? (4 colors)');
    if(arr===s[0]){
      alert('correct');
      l=l+1;
      break;
    }
    else if(arr===s[1]){
      alert('correct');
      l=l+1;
      break;
    }
    else if(arr===s[2]){
      alert('correct');
      l=l+1;
      break;
    }
    else if(arr===s[3]){
      alert('correct');
      l=l+1;
      break;
    }
    else {
      alert('incorrect');
    }
  }
  alert('the colors are: '+ s[0]);
  alert('the colors are: '+ s[1]);
  alert('the colors are: '+ s[2]);
  alert('the colors are: '+ s[3]);
  alert('your score is : '+ l);
}
myColor();
