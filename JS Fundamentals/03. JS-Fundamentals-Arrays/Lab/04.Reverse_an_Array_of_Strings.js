function swapElements(elements) {
    for (let index = 0; index < elements.length / 2; index++) {
        let temp =  elements[index];

        elements[index] = elements[elements.length - 1 - index];
        elements[elements.length - 1 - index] = temp;
    }

    console.log(elements.join(' '))
}

swapElements(['a', 'b', 'c', 'd', 'e']);
swapElements(['abc', 'def', 'hig', 'klm', 'nop']);
swapElements(['33', '123', '0', 'dd']);