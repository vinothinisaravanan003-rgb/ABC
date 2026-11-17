
function randomColor() {

    // Three available colours
    const colors = ["green", "blue", "red"];

    // Generate a random number
    const randomIndex = Math.floor(
        Math.random() * colors.length
    );

    // Return a random colour
    return colors[randomIndex];
}

// Select all alphabet h5 elements
const letters = document.querySelectorAll(".letter h5");

// Add click event to every alphabet
letters.forEach(function(letter) {

    letter.addEventListener("click", function() {

        letter.style.color = randomColor();

    });

});

function randomColor() {

    // Three available colours
    const colors = ["green", "blue", "red"];

    // Generate a random number
    const randomIndex = Math.floor(
        Math.random() * colors.length
    );

    // Return a random colour
    return colors[randomIndex];
}

// Select all alphabet h5 elements
const letters = document.querySelectorAll(".letter h5");

// Add click event to every alphabet
letters.forEach(function(letter) {

    letter.addEventListener("click", function() {

        letter.style.color = randomColor();

    });

});
