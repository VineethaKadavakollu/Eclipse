let num1=6
let  num2=5
let data=num1>num2
console.log(data)//true

let str1="Book" // it compares the Ascii values of characters
let str2="pen"
data =str1>=str2
console.log(data)//false

num1=6
str1="pen"
data =str1>=num1
console.log(data)//false

num1=6
str1="2"
data =str1<=num1 // it converts string 6 into number
console.log(data)//true

num1=6
str1="6"
data =str1==num1 // it just checks the data and compares it. Generally it is false..because they are of different data types
console.log(data) //true

num1=6
str1="6"
data =str1===num1 // this operater checks data as well as datatypes
console.log(data) //false


//TRICKY LOGIC
str1=''
str2=false
data=str1==str2// we know that boolean of empty string is falsy..so it gives true
console.log(str1,Boolean(str1),typeof str1);// , false, string
console.log(data);//true
data=str1===str2
console.log(data);//false

