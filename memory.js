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
console.log(username);
console.log(anotheruserName);