/*
1.	Add or Subtract
Write a function, which changes the value of odd and even numbers in an array of numbers. 
•	If the number is even - add to its value its index position
•	If the number is odd - subtract to its value its index position
Output
On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array.

*/

function addOrSubtract(arr) {
    let sumOld = 0;
    let sumNew = 0;

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        let elementOld = Number(arr[i]);
        sumOld += elementOld;

        if (elementOld % 2 == 0) {
           
            newArray.push(elementOld + i);

        } else {

            newArray.push(elementOld - i);

        }
    }

    for (let j = 0; j < newArray.length; j++) {
        sumNew += newArray[j];
    }

    console.log(newArray);
    console.log(sumOld);
    console.log(sumNew);
}

addOrSubtract([5, 15, 23, 56, 35]);
addOrSubtract([-5, 11, 3, 0, 2]);