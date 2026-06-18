/*  there are two types of memory 
1.stack memory (changes in copy of variables)
2.Heap memory (changing in original value in veriables)*/
//example of stack memory
let name="shubham";
let anotherName=name;
anotherName="Kumar";
//console.log(name);
//console.log(anotherName);
   

//Heap Memory
let username={
    email:"schy8202@gmail.com"
}
let anotheruserName=username;
anotheruserName.email="schy3360@gmail.com"
//console.log(username);          //reference 
//console.log(anotheruserName);   



//string in java script

const nam = new String(`shubham`);
let year = new String(` of final year`);   //try to prefer this
//console.log(nam);
//let um = "kumar";
//console.log(um);
console.log(`hello my name is ${nam} and i am a B.tech student ${year} `);  //prefer this (it is called string interpolation)

//mode of string

console.log(nam[0]);
console.log(nam[1]);
console.log(nam.length); //length

console.log(nam.toUpperCase()); //uppercase

