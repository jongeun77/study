'use strict'
//1~10까지 합 sum
/* 
let sum = 0; 
for( let i = 1; i <=10; i++){
    // sum = sum +i;
    sum += i;
}
console.log('총합은 %s', sum); */
/* 
let sum = 0;
let i = 1;
for( ; i<=10; ){
    sum += i;
    i++;
} */

let sum = 0;
for( let i= 0; i<50; i++){
    if(i%2==0){
        sum +=i
    }
}

console.log('총합은%s',sum);