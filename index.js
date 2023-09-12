const {Circle, Triangle, Square} = require('./shapes.js')
const fs = require('fs')
const inquirer = require('inquirer')

function logo({ letters, letterColors, shape, color }) {
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
            const data = logo(response)

            writeToFile('logo.svg', data, (err) =>
                err ? console.log(err) : console.log('Generated logo.svg'))
        })
}


init();



