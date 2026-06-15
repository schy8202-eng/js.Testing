/* data types 
there are two types of data types 
1.premitive data types(call by value)-copy
    a.string
    b.Number
    c.Null
    d.undefined
    e.symbol(kisi bhi value ko unique banane ke liye use hota hai)
    f.BigInt
    g.Boolean
    
    
    
    2.Non-premitive(reference type)
        a.Array []
        b.Objects {}
        c.Functions*/



        //symbol
        const id=Symbol("502");
        const anotherId=Symbol("560");
        console.log(id===anotherId);  //false


        //array
        //const name=["shubham","Ankit","dheeraj"]

        //Functions
        function myFunction() {
            console.log("shubham Kumar");
        }
        myFunction();


        //objects
         /*  {
            name:shubham;
            age:..;
         }*/
