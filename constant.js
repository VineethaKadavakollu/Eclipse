// First  consider radius and pi values then calculate area of the circle.
/* let radius =5
let pi=3.14
 let area
  area= pi*radius*radius
  console.log(area)
 */
  //then take another value for radius .. it overides the original value and prints the output
 /*  let radius =5
let pi=3.14
 let area
 radius =4
  area= pi*radius*radius
  console.log(area) */
  // In the same way we can change all the values of variables .. but we have some constants for which the values of the variables cannot be changed.
  // For example, the value of pi is always 3.14 .. so inorder to maintain the value for calculating all the areas .. we declare it as const
  // after declaring a variable as constant .. we cannot ovveride its value
  let radius =5
 const pi=3.14
 let area
   radius =7
  area= pi*radius*radius
  console.log(area)