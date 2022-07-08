//1-7

// type Animal = string | number | undefined

// let 동물 :Animal = 'kim';

type AnimalType = { name : string, age : number }

let 동물 :AnimalType = {
    name : 'kim',
    age : 20
}

type GirlFriend = {
    readonly name : string
}

const 여친 :GirlFriend = {
    name : 'kim'
}

// 여친.name = 'park'

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x : number };
type PositionY = { y : number };

type NewType = PositionX & PositionY;

let position :NewType = { x : 10, y : 20 }

//과제1
type PositionX1 = { x : number };
type PositionY1 = { x : number };

type NewType1 = PositionX1 & PositionY1;

let position1 :NewType1 = { x : 10 }

//과제2
type MyType = {
    color? : string,
    size : number,
    readonly position: number[]
}

//과제3
type User = {
    name : string,
    phone : number,
    email : string
}

let userTest :User = {
    name : 'kim',
    phone : 333,
    email :'aaa@gmail.com'
}

//과제4
type Test = {
    name : string,
    number : number,
    mail : string,
    adult : boolean
}

let userTest1 :Test = {
    name : 'kim',
    number : 3333,
    mail : 'ddd@gmail.com',
    adult : false
}