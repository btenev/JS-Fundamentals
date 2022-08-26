/*

Write a function that receives an array and number of rotations you have to perform (first element goes at the end). 
Output
Print the resulting array elements separated my single space.

*/

function arrayRotation(arr, rot) {
    

    for (let rotatio = 1; rotatio <= rot; rotatio++) {
        let tempArray = [];

        for (let i = 1; i < arr.length; i++) {
           tempArray[i - 1] = arr[i];
           
        }
        tempArray[tempArray.length] = arr[0];
        arr = tempArray;

    }
    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);