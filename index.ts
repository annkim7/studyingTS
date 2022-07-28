//1-13
class Person{
    //data :number = 0;
    name :string;
    constructor(a :string){
        this.name = a;
    }

    함수(a :string){
        console.log('안녕' + a);
    }
}

//Person.prototype.함수 = function(){}

let 사람1 = new Person('kim');
let 사람2 = new Person('park');

//console.log(사람1.data);

// console.log(사람1);

사람1.함수('kim')

//과제1
class Car{
    model :string;
    price :number;
    constructor(type :string, price :number){
        this.model = type;
        this.price = price;
    }

    tax() :number{
        return this.price * 0.1
    }
}

let car1 = new Car('소나타', 3000)
console.log(car1);
console.log(car1.tax());

//과제2
class Word{
    num;
    str;
    constructor(...param){
        let numbers :number[] = [];
        let names :string[] = [];

        param.forEach((i)=>{
            if(typeof i === 'string'){
                names.push(i)
            }else{
                numbers.push(i)
            }
        })

        this.num = numbers;
        this.str = names;
    }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num)
console.log(obj.str)