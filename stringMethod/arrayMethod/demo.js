// Pop
// function myFunction(arr) {
//   const num = arr.pop()
//   console.log(num);
// }
// Push
function addNum(arr) {
  const txt = arr.push(11)
  console.log(txt);
}
// shift
function newFunction(arr) {
  const text = arr.shift()
  console.log(text);

}
// unshift
function dataNew(arr) {
  const data = arr.unshift(11)
  console.log(data);

}

// array.length
function sizeFunction(arr) {
  const text = arr.length;
  console.log(text)

}
// Array to String 
// function myFunction(arr) {
//   const fruits = arr.toString();
//   console.log(fruits);

// }

// At Char
// function myFunction(arr) {
//   const fruits = arr.at(2)
//   console.log(fruits)

// }

// console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(addNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(newFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(dataNew([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(sizeFunction(["Banana", "Orange", "Apple", "Mango", "Peas"]))
// console.log(myFunction(["Banana", "Orange", "Apple", "Mango", "Peas"]))
// console.log(myFunction(["Banana", "Orange", "Apple", "Mango", "Peas"]))


// Accessing the First Array Element
// const fts = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fts[0];
// console.log(fts)

// Accessing the Last Array Element
// const Element = ["Banana", "Orange", "Apple", "Mango"];
// let ele = Element[Element.length - 1];
// console.log(ele)

//Looping Array Elements
// function fruitFunction(fruits) {
// let txt = ""
//   for (let i = 0; i <= fruits.length-1; i++) {

//     txt += fruits[i] + " "

//   }
//   return txt;
// }
// console.log(fruitFunction(["Banana", "Orange", "Apple", "Mango", "Peas"]));

// Concat
// let boys = ["Amit", "Manjoy", "Joy", "Manish", "Aditya"];
// let girls = ["Kunika", "Aditi","Pooja"]
// let people = ["Hindu", "Muslim"]

// const result = boys.concat(girls, people);
// console.log(result);

//Or
// function myFunction(arr1, arr2, arr3) {

//   let result = arr1.concat(arr2, arr3);
//   return result;

// }
// console.log(myFunction(["Amit", "Manjoy", "Joy", "Manish", "Aditya"], ["Kunika", "Aditi", "Pooja"], ["Hindu", "Muslim"]));

//JavaScript Array splice()

function myFunction(arr) {


  const result = arr.splice(-4, 0, "Peas", "Water");
  return arr;
  

};
console.log(myFunction(["Banana", "Orange", "Apple", "Mango","lichi","grapes","guava","Melon"]));





