function calculatePlateRotation(bandName, albumName, songName) {
    let duration = (bandName.length * albumName.length) * songName.length / 2;
    
    let numOfRotation = Math.ceil(duration / 2.5);

    console.log(`The plate was rotated ${numOfRotation} times.`);
}

calculatePlateRotation('Black Sabbath', 'Paranoid', 'War Pigs');
