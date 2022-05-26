const prompt = require("prompt-sync")({ sigint: true });
let Choose = prompt("Do you wish to combine or deconstruct a color?");

if (Choose === "Combine") {
    console.log("Pick two colors (one at a time)")

    let color1 = prompt("Red, blue or yellow: ")
    let color2 = prompt("Choose another color from above: ")

    if (color1 === "red" && color2 === "blue") {
        console.log("purple")
    }
    else if (color1 === "red" && color2 === "yellow") {
        console.log("orange")
    }
    else if (color1 === "blue" && color2 === "yellow") {
        console.log("green")
    }
    else {
        console.log("error")
    }
}

else if (Choose === "Deconstruct") {
    console.log("Pick a color from below: ")

    let color3 = prompt("purple, orange or green: ")

    if (color3 === "purple") {
        console.log("red + blue")
    }
    else if (color3 === "orange") {
        console.log("red + yellow")
    }
    else if (color3 === "green") {
        console.log("blue + yellow")
    }
    else {
        console.log("error")
    }
}






