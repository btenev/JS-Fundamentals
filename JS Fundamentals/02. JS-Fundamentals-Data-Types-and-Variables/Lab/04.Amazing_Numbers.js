function amazingNumbers(number) {
    let num = number.toString();
    let sum = 0;

    for (let index = 0; index < num.length; index++) {
        sum += Number(num[index]);
        
    }

    let result = sum.toString().includes('9');

    console.log(result == true ? `${num} Amazing? True `: `${num} Amazing? False`);
}

amazingNumbers(1233);