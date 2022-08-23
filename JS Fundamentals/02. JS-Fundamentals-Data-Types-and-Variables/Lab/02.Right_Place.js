function replaceAndCompare(original, toReplace, compare) {
    let newString = original.replace('_', toReplace);

    let result = compare == newString ? 'Matched' : 'Not Matched';

    console.log(result);
}

replaceAndCompare('Str_ng', 'i', 'String');