//9, 100, 1.1

function integerOrFloat (numOne, numTwo, numThree) {
    let sum = numOne + numTwo +  numThree;

    if (sum % 1 == 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`)
    }
}

integerOrFloat(100, 200, 303);