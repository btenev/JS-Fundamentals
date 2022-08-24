function identicalArryays(arrOne, arrTwo) {
    let indexDiffer;
    let sum = 0;

    for (let index = 0; index < arrOne.length; index++) {
        const elementFirst = Number(arrOne[index]);
        const elementSecond = Number(arrTwo[index]);
        
        if (elementFirst != elementSecond) {
            indexDiffer = index;
            break;
        }

        sum += elementFirst;
    }

    if (indexDiffer == undefined) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexDiffer} index`)
    }
}

identicalArryays(['10','20','30'], ['10','20','30']);
identicalArryays(['1','2','3','4','5'], ['1','2','4','4','5']);
identicalArryays(['1'], ['10']);