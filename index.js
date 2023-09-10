// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters


// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)


// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square


// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// All of the above can be created like the previous challenge

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line


// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const {Circle, Triangle, Square} = require('./shapes.js')
const fs = require('fs')
const inquirer = require('inquirer')

// I need to create a logo function that within it contains code to use as data down below. What do i put into the function? It has to contain all of the data from the user input right? 

// Use this function to create into an object with classes. Still keep conditionals but start using classes after
function logo({ letters, letterColors, shape, color }) {
    // if user selects circle return circle. 
    let shapeObject 
    if (shape ==='circle') {
        shapeObject = new Circle()
    }

    if (shape === 'triangle') {
        shapeObject = new Triangle()
    }

    if (shape === 'square') {
        shapeObject = new Square()
    }
    shapeObject.setColor(color)
    shapeObject.setLetterColors(letterColors)
    shapeObject.setLetters(letters)
    console.log(shapeObject)
    return `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">${shapeObject.render()}<text x="50%" y="50%" text-anchor="middle" font-size="10" fill = "${shapeObject.letterColors}">${shapeObject.letters}</text></svg>`
 
    
};

const questions = [
    {
        type: 'input',
        message: 'Enter three letters that you would like to display on your logo.',
        name: 'letters'
    },
    {
        type: 'input',
        message: 'What color would you like your logo text to be?',
        name: 'letterColors'
    },
    {
        type: 'list',
        message: 'What shape would you like your logo to be?',
        choices: ['circle', 'triangle', 'square'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'What color would you like your logo to be?',
        name: 'color'
    },
]

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg'))
};

function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response)
            const data = logo(response)

            console.log(data)
            writeToFile('logo.svg', data, (err) =>
                err ? console.log(err) : console.log('Generated logo.svg'))
        })
}


init();



