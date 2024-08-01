

function rolldice(){

    const numdice = document.getElementById("numdice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimage = document.getElementById("diceimage");

    const values = [];
    const images = [];

    for(let i = 0; i < numdice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Dice_Images/${value}.jpeg" alt="Dice: ${value}">`);
    }

    diceresult.textContent = `Dice: ${values.join(', ')}`;
    diceimage.innerHTML = images.join('');

}