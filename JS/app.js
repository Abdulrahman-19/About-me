'use strict';

let userName = prompt('Enter your Name');
alert('welcome '+ userName);

alert('answer by typing yes/no');
let x = prompt('is my name start with AB letters?');
let l = 0;

if (x.toLocaleLowerCase() === 'yes'){
  //console.log('b ');
  alert('b ');
  l=l+1;
}
else{
  //console.log('inb ');
  alert('inb ');
}

let y = prompt('do I live in irbid?');

if (y.toLocaleLowerCase() === 'yes'){
  //console.log('b ');
  alert('b ');
  l=l+1;
}
else{
  //console.log('inb ');
  alert('inb ');
}
let g = prompt('did I studed computer engineering in AHU?');

if (g.toLocaleLowerCase() === 'yes'){
  //console.log('b ');
  alert('b ');
  l=l+1;
}
else{
  //console.log('inb ');
  alert('inb ');
}
let a = prompt('Am I bold?');

if (a.toLocaleLowerCase() === 'no'){
  //console.log('b ');
  alert('b ');
  l=l+1;
}
else{
  //console.log('inb ');
  alert('inb ');
}

let b = prompt('Am I 27 years old?');

if (b.toLocaleLowerCase() === 'yes'){
  //console.log('b ');
  alert('b ');
  l=l+1;
}
else{
  //console.log('inb ');
  alert('inb ');
}

for(let i = 0; i<4 ;i++)
{
  let number = parseInt(prompt('gues a number between 0 and 20?'));
  if (number === 10 )
  {
    alert('b ');
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

let s =['red','blue','black','green'] ;
let p = false;
for (let z=0; z<6 ;z++){
  for(let a = 0; a < s.length ; a++)
  {
    let arr = prompt('what is my favorit colors? (4 colors)');
    if(arr===s[a]){
      p = true;
      break;
    }
    if (p){
      alert('correct');
      l=l+1;
      break;
    }
    else {
      alert('incorrect');
    }
  }
}
alert('the colors are: '+ s);


