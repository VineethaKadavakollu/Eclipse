//In javascript DATATYPES are of 2 TYPES.
//1.PRIMITIVE           2.OBJECT--> whatever datatypes are not part of primitive are object.
//   ->NUMBER
//   ->STRING
//   ->BOOLEAN
//   ->NULL
//   ->UNDEFINED

let user="Vineetha"  //string
 let num1 = 123456   // number
let num =7.8  //floating dedcimal is also a number
num=1.5e6 // 1.5  multiplied by 10 power 6 
console.log(num)
num =10_00_00_000 // we can use underscore to avoid confusion
let num2=5/0  //it gives Infinity
num2=-5/0  // -Infinity
 console.log(num1*25)
 console.log(num)
 console.log(num2)
 // to know the datatype of variable we can use "typeof"
 console.log( typeof num1)
 console.log( typeof user)

// Maximun safe value for number is 9007199254740991
 // we should have a range of number i.e.,1.7976931348623157e+308 this is tha largest number we can have
 
 // to find max value
 console.log(Number.MAX_VALUE)
 console.log(Number.MAX_VALUE*10)
 // if the number exceeds the maximum safe value it attains inconsistency .. so we have another datatype as BIGINT.
let num3= 123456781995675789654492015749  //1.234567819956758e+29.. we are loosing the precision so wecan use big int
num3= 123456781995675789654492015749n  //small n represents the number in bigint ..op-123456781995675789654492015749n
console.log(num3)
