'use strict';

let userName = prompt('Enter your Name');
alert('welcome '+ userName);

alert('answer by typing yes/no');
let x = prompt('is my name start with AB letters?');
let l = 0;
function myName(){
  if (x.toLocaleLowerCase() === 'yes'){
    alert('correct');
    l=l+1;
  }
  else{
    alert('incorrect');
  }
}
myName();
function myPlace(){
  let y = prompt('do I live in irbid?');

  if (y.toLocaleLowerCase() === 'yes'){
    alert('correct');
    l=l+1;
  }
  else{
    alert('incorrect');
  }
}
myPlace();
function myStudy(){
  let g = prompt('did I studed computer engineering in AHU?');

  if (g.toLocaleLowerCase() === 'yes'){
    alert('correct');
    l=l+1;
  }
  else{
    alert('incorrect');
  }
}
myStudy();
function myHair(){
  let a = prompt('Am I bold?');

  if (a.toLocaleLowerCase() === 'no'){
    alert('correct');
    l=l+1;
  }
  else{
    alert('incorrect');
  }
}
myHair();
function myAge(){
  let b = prompt('Am I 27 years old?');

  if (b.toLocaleLowerCase() === 'yes'){
    alert('correct');
    l=l+1;
  }
  else{
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
function myColor()
{
  let s =['red','blue','black','green'] ;
  let color;
  let p = false;
  for (let z=0; z<6 ;z++){
    color= prompt('enter color');
    for(let i=0; i<s.length ; i++){
      if(color===s[i]){
        p = true;
        l++;
        break;
      }
    }
    if(p){
      alert('correct');
      break;
    }
  }
  alert('the colors are: '+ s);
}
myColor();
alert('you got '+l+' out of 7');
