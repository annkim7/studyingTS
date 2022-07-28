//1-13
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    Person.prototype.함수 = function (a) {
        console.log('안녕' + a);
    };
    return Person;
}());
//Person.prototype.함수 = function(){}
var 사람1 = new Person('kim');
var 사람2 = new Person('park');
//console.log(사람1.data);
// console.log(사람1);
사람1.함수('kim');
//과제1
var Car = /** @class */ (function () {
    function Car(type, price) {
        this.model = type;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
//과제2
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var numbers = [];
        var names = [];
        param.forEach(function (i) {
            if (typeof i === 'string') {
                names.push(i);
            }
            else {
                numbers.push(i);
            }
        });
        this.num = numbers;
        this.str = names;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);
