// What do I need to create here? The code for the actual shapes copy pasted from google? That code is in xtml format so do i create an html?
class Shapes {
    constructor(){
        this.color = ''
        this.letterColors = ''
        this.letters= ''
    }
    setColor(color){
        this.color= color
    }
    setLetterColors(letterColors){
        this.letterColors= letterColors
    }
    setLetters(letters){
        this.letters= letters
    }
};

class Circle extends Shapes {
    render(){
        return `<circle cx="50%" cy="50%" r="20" fill = "${this.color}"/>`
    }
};


class Triangle extends Shapes {
   render(){
    return `<polygon points="100,10 10,210 210,210" fill = "${this.color}" />`
   }
};

class Square extends Shapes {
    render(){
        return `<rect width="300" height="100" fill = "${this.color}" />`
    }
};

module.exports= {Circle, Triangle, Square}






