// const colors = ["green", "red", "#aaf", "blue", "teal", "orange"];
const hex = [0, 1, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    // console.log(document.body); - logs body markup to console

    //#region for colors used from the colors array
    /*
    // get random number between 0-2
    const randomNumber = getRandomNumber();
    // changes the colour
    document.body.style.backgroundColor = colors[randomNumber];
    // puts color name on screen
    color.textContent = colors[randomNumber];
    // logs the number to conosle
    console.log(randomNumber);
    */
    //#endregion

    //#region for hex generator
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        randomNumber = getRandomNumber();
        hexColor += hex[randomNumber];
        console.log(hexColor);
    }
    // changes the colour
    document.body.style.backgroundColor = hexColor;
    // puts color name on screen
    color.textContent = hexColor;
    //#endregion
})

const getRandomNumber = () => {
        return Math.floor(Math.random() * hex.length);
        // return Math.floor(Math.random() * colors.length);
}


