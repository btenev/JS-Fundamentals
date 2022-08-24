function sumOfEvenNums(arr) {
let sum = 0;

    for (let index = 0; index < arr.length; index++) {
        const num = Number(arr[index]);
        
        if (num % 2 == 0) {
            sum += num;
        }
    }
    console.log(sum);
}

sumOfEvenNums(['1','2','3','4','5','6']);
sumOfEvenNums(['3','5','7','9']);
sumOfEvenNums(['2','4','6','8','10']);