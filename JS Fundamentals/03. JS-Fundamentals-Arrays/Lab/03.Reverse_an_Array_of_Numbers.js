function newArray(n, arr) {
    let result = '';

    for (let start = n - 1; start >= 0; start--) {
        result += arr[start] + ' ';
    }

    console.log(result);
}

newArray(3, [10, 20, 30, 40, 50]);
newArray(4, [-1, 20, 99, 5]);
newArray(2, [66, 43, 75, 89, 47]);