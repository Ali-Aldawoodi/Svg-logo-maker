const {Circle} = require('../shapes.js')
const {Triangle} = require('../shapes.js')
const {Square} = require('../shapes.js')


describe('Shapes', () => {

    describe('Circle', () => {
        it('should return a circle', () => {
            const circle = Circle
            expect(circle).toEqual(circle)
        });
    });
    describe('Triangle', () => {
        it('should return a triangle', () => {
            const triangle = Triangle
            expect(triangle).toEqual(triangle)
        });
    });
    describe('Square', () => {
        it('should return a square', () => {
            const square = Square
            expect(square).toEqual(square)
        });
    });
});