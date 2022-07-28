//1-14

//type Square = { color :string, width :number }

interface Square {
    color :string,
    width :number
}

let 네모 :Square = { color : 'red', width : 100 }

interface Student{
    name :string;
}
// interface Student{
//     score :number
// }

interface Teacher extends Student{
    age :number;
}

let 학생 :Student = { name : 'kim' }
let 선생 :Teacher = { name : 'kim', age : 20 }

type Animal = { name :string }
type Cat = { age : number } & Animal
// type Cat = { name :number } & Animal

// let 야옹이 :Cat = { name : 'kim' }

//과제1
interface A{
    brand :string,
    serialNumber :number,
    model :string[]
}

let 상품 :A = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

//과제2
interface Cart{
    product :string,
    price :number
}

let 장바구니 :Cart[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 

//과제3
interface NewCart extends Cart{
    card : boolean
}

//과제4
interface C{
    plus : (a :number, b :number) => number,
    minus : (a :number, b :number) => number
}

let cal :C ={
    plus(a,b){
        return a+b
    },
    minus(a,b){
        return a-b
    }
}