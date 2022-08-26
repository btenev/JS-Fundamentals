/*
Write a function to find all the top integers in an array. A top integer is an integer which is bigger 
than all the elements to its right. 
Output
Print all top integers on the console, separated by single space.


*/

function printTopInteger(arr) {
    let printTopInteger = '';

    for (let a = 0; a < arr.length; a++) {
        let current = arr[a];
        let topInteger = false;

        for (let i = 1 + a; i < arr.length; i++) {
            let rightElent = arr[i];

            if (current > rightElent) {
                 topInteger = true;
            } else {
                topInteger = false;
                break;
            }
        }

        if (topInteger) {
            printTopInteger += current + ' ';
        }
    }

    console.log(printTopInteger + arr[arr.length - 1]);
}

printTopInteger([1, 4, 3, 2]);
printTopInteger([14, 24, 3, 19, 15, 17]);
printTopInteger([41, 41, 34, 20]);
printTopInteger([27, 19, 42, 2, 13, 45, 48]);