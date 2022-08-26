/*
Write a function, which prints common elements in two string arrays. Print all matches on separate lines.
 Compare the first array with the second array.


 ['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']

*/

function commonElements(arrOne, arrTwo) {
    
    for (let i = 0; i < arrOne.length; i++) {
        let elementOne = arrOne[i];

        for (let j = 0; j < arrTwo.length; j++) {
            let elementTwo = arrTwo[j];

            if (elementOne === elementTwo) {
                console.log(elementOne);
            }
            
        }
    }
}

commonElements( ['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
);