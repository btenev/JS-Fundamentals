function evenAndOddResult(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let current of arr) {
        let num = Number(current);

        if (num % 2 == 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }

    let result = sumEven - sumOdd;

    console.log(result)
}

evenAndOddResult([1,2,3,4,5,6]);
evenAndOddResult([3,5,7,9]);
evenAndOddResult([2,4,6,8,10]);