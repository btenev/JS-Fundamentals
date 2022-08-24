function dayOfWeekPrinter(num) {
    let weekDays = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]

    if (num >= 1 && num <= 7) {
        console.log(weekDays[num - 1]);
    } else {
        console.log('Invalid day!');
    }
}

dayOfWeekPrinter(3);
dayOfWeekPrinter(6);
dayOfWeekPrinter(11);