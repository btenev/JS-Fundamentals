function condenseArray(arr) {
 
    while(arr.length > 1) {
        let condensed = [];

        for (let index = 0; index < arr.length - 1; index++) {
            condensed.push(Number(arr[index]) + Number(arr[index + 1]));
        }

        arr = condensed;
    }

    console.log(arr[0]);
}

condenseArray([2,10,3]);
condenseArray([1]);