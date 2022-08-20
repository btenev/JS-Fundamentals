function sumOfOddNumbers(count) {
    let sum  = 0;

    for (let start = 1; start < 350; start++) {
        if (start % 2 != 0) {
            sum += start;
            count--;
            console.log(start);
        }
        
        if (count == 0) {
            break;
        }
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);