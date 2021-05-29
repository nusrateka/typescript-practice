var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
var message;
message = 'abc';
var endsWith = message.endsWith('c');
//inline annotation
var drawpoint = function (point) {
};
drawpoint({
    m: 1,
    n: 2
});
var drawLine = function (line) {
    //..
};
drawLine({
    x: 1,
    z: 2
});
//class
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log('hi' + this.p);
    };
    Circle.prototype.getDistance = function () {
        //...
    };
    return Circle;
}());
var circle = new Circle();
circle.p = 1;
circle.draw();
// using constructor
var Square = /** @class */ (function () {
    function Square(o, p) {
        this.o = o;
        this.p = p;
    }
    Square.prototype.drawSquare = function () {
        console.log('o: ' + this.o, 'p:' + this.p);
    };
    return Square;
}());
var square = new Square(1, 2);
square.drawSquare();
