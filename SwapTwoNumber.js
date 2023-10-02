// const swap = (a, b) => {
//     [a, b] = [b, a]
//     console.log(a,b)
    
// }

// swap(5,6)



function myFunction(a, b) {
    //var a = 5, b = 9;

    a = a - b;
    b = a + b;
    a = b - a;
    return (`${a} and ${b}`);
}
console.log(myFunction(5, 9));