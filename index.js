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

// I need to create a logo function that within it contains code to use as data down below. What do i put into the function? It has to contain all of the data from the user input right? 

const circle = '<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="75" r="20"/>' 
const triangle ='<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="225,10 100,210 350,210"/>' 
const square = '<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="100"/>'
  

function logo({ letters, letterColors, shape, color }) {
    
  const choiceIndex = [`${shape} fill = ${color} /> <text x="150" y="125" font-size="60" fill = ${letterColors}>${letters}</text></svg>`, `${shape} fill = ${color} /> <text x="150" y="125" font-size="60" fill = ${letterColors}/> ${letters}</text></svg>`, `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="100" fill = ${color} /> <text x="150" y="125" font-size="60" fill = ${letterColors}/> ${letters}</text></svg>`]
   
   


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
        err ? console.log(err) : console.log('Check out your logo!'))
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








// const circle = `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="75" r="20" fill = ${color} /> </svg>`
//     const triangle = `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="225,10 100,210 350,210" fill = ${color} /></svg>`
//     const square = `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="100" fill = ${color} /></svg>`
