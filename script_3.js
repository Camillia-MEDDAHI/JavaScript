// for(let count = 0; count <=5; count++){
//     console.log(`on va compter jusqu'à 5 : ${count}`);
//   }
  
//   console.log(count)
let number = prompt(`choisis un nombre pour notre super pyramide`);
var diez = "#";
var space = " ";
let x = 0;
  for( number; number >= 0; number--){
    x++
    console.log(space.repeat(number) + diez.repeat(x));
  }
 
  
