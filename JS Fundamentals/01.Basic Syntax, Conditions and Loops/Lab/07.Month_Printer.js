function monthPrinter(key) {

    let toPrint;

    switch (key) {
        case 1:
            toPrint = 'January';
            break;
        case 2:
            toPrint = 'February';
            break;
        case 3:
            toPrint = 'March';
            break;
        case 4:
            toPrint = 'April';
            break;
        case 5:
            toPrint = 'May';
            break;
        case 6:
            toPrint = 'June';
            break;
        case 7:
            toPrint = 'July';
            break;
        case 8:
            toPrint = 'August';
            break;
        case 9:
            toPrint = 'September';
            break;
        case 10:
            toPrint = 'October';
            break;
        case 11:
            toPrint = 'November';
            break;
        case 12:
            toPrint = 'December';
            break;
        default:
            toPrint = 'Error!';
            break;
    }

    console.log(toPrint);
}

monthPrinter(13);