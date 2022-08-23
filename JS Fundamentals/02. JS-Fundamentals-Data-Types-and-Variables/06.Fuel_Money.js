function tripCalculator(distance, passengers, pricePerLitre) {
    let neededFuel = (distance / 100) * 7;
    neededFuel += passengers * 0.100; 

    let neededMoney = neededFuel * pricePerLitre;

    console.log(`Needed money for that trip is ${neededMoney} lv`);

}

tripCalculator(90, 14, 2.88);