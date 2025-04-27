function rollDice() {
    // Get the number of dice to roll from the input field
    const numOfDice = document.getElementById("numberValue").value;

    // Get the elements where the results and images will be displayed
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    // Initialize arrays to store dice values and corresponding image HTML
    const values = [];
    const images = [];

    // Loop to roll the dice the specified number of times
    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1; // Generate a random value between 1 and 6
        // console.log(value) can be used for debugging to check generated values
        values.push(value); // Add the dice value to the `values` array
        images.push(`<img src="img/dice${value}.png">`); // Create an image tag for the dice and add it to the `images` array
    }

    // console.log(values) can be used for debugging to check the array of dice values

    // Display the dice values as text
    diceResult.textContent = `Dice: ${values.join(', ')}`;

    // Display the corresponding dice images
    diceImages.innerHTML = `${images.join(" ")}`;
}
