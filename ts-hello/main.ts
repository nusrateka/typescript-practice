enum Color {
    Red,
    Blue,
    Green
}
let backgroundColor = Color.Blue;


const user1: {name: string, age: number} = {
    name: 'eka',
    age: 25,
}

const user2: {name: string} = {
    name: 'nusrat',
}

//using interface we can do the upper code in more simpler way, we dont have to write the
// type of the two objects user1 and user2 multiple times:

interface User{
    name: string,
    age?: number
}

const user3: User = {
    name: 'eka',
    age: 25,
}

const user4: User = {
    name: 'nusrat',
}




let message;
message = 'abc';
let endsWith = message.endsWith('c');

//inline annotation

let drawpoint = (point : {m : number, n : number}) => {

};
drawpoint({
    m: 1,
    n: 2
});

// but to make more cleaner code we can use interface
interface Line {
    x: number,
    z : number
}

let drawLine = (line: Line) => {
    //..
}

drawLine({
    x: 1,
    z: 2
});


//class

class Circle {
    p: number;
    q: number;

    draw() {
        console.log('hi'+ this.p);
    }

    getDistance(){
        //...
    }
}

let circle= new Circle();
circle.p = 1;
circle.draw();

// using constructor

class Square {
    o: number;
    p: number;

    constructor(o?: number, p?: number) {
        this.o = o;
        this.p = p;
    }
    drawSquare() {
        console.log('o: '+ this.o, 'p:'+ this.p);
    }

}

let square= new Square(1,2);
square.drawSquare();

// more clean way to write upper code ->

class Triangle {

    constructor(private o?: number, private p?: number) {
    }
    drawSquare() {
        console.log('o: '+ this.o, 'p:'+ this.p);
    }

    getO(){
        return this.o;
    }

}

let triangle= new Triangle(1,2);
let getValue = triangle.getO();
triangle.drawSquare();