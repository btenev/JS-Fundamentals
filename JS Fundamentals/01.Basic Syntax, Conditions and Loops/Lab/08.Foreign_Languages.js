function spokenLanguage(country) {
    let toPrint;

    switch (country) {

        case 'USA':
        case 'England':
            toPrint = 'English';
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            toPrint = 'Spanish'
            break;
        default:
            toPrint = 'unknown'
            break;
    }

    console.log(toPrint);
}

spokenLanguage('Mexico');
