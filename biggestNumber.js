//biggest number from an Array

const bigArray=[10, 5, 24, 6, 8];
let large=bigArray[0];
for(let i=0; i<bigArray.length; i++){
  if(bigArray[i]>large){
    large=bigArray[i];
  }
}
console.log(large);