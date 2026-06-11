const number="555tfr"
const number=null;         //0 output
const number=undefined;       //NaN output
const number=true;             // 1 output
const number="shubham";        //ye number me convert nahi ho sakta 
//console.log(typeof(number));
let ConversionNumber=Number(number);
//console.log(ConversionNumber);
//console.log(typeof(ConversionNumber));     //NaN means Not a Number


//NOTES
//1=> true or 0=> false
//""=>false
//"shubham"=>true
let loggedIn=1;
let isLoggedIn=Boolean(loggedIn);
console.log(isLoggedIn);