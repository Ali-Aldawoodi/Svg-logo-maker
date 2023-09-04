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

const Shapes = require('./lib/shapes.js')
const fs = require('fs')
const inquirer = require('inquirer')

// const shapes = new Shapes();



const questions = [
    {
        type: 'input',
        message:'Enter three letters that you would like to display on your logo.',
        name: 'letters'
    },
    {
        type: 'input',
        message:'What shape would you like your logo to be?',
        name: 'shape'
    },
    {
        type: 'list',
        message:'What color would you like your logo to be?',
        choices:['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black', 'brown', 'grey', 'pink'],
        name: 'color'
    },
]

function writeToFile(filename,data) {
    fs.writeFile(filename,data, (err) => 
    err? console.log(err) : console.log('Check out your logo!'))
};

function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
        console.log(response)
        const data = logo(response)

        
        writeToFile('logo.svg', data, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg'))
    })
}


init();

