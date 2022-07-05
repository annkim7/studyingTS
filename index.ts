let 이름 :string = 'kim';
let 어레이 :string[] = ['kim', 'park'];
let 오브젝트 :{ name : string } = { name : 'kim' };
let 여러가지 :string | number = 'kim';

type Name = string | number;
let 이이름 :Name = 123;

function 함수(x :number) :number{
    return x * 2
}

type Member = [number, boolean];
let john:Member = [123, true];

type Member1 = {
    [ key :string ] : string,
}

let jane : Member1 = { name : 'kim'}

class User{
    name :string;
    constructor(name :string){
        this.name = name;
    }
}