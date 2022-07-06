//1-2
// let 이름 :string = 'kim';
// let 어레이 :string[] = ['kim', 'park'];
// let 오브젝트 :{ name : string } = { name : 'kim' };
// let 여러가지 :string | number = 'kim';

// type Name = string | number;
// let 이이름 :Name = 123;

// function 함수(x :number) :number{
//     return x * 2
// }

// type Member = [number, boolean];
// let john:Member = [123, true];

// type Member1 = {
//     [ key :string ] : string,
// }

// let jane : Member1 = { name : 'kim'}

// class User{
//     name :string;
//     constructor(name :string){
//         this.name = name;
//     }
// }

//1-3
let 회원들 :string[] = ['kim', 'park'];
let 회원들2 :{ member1 : string, member2 : string } = { member1 : 'kim', member2 : 'park' };
let 회원들3 = [1,2,3];

//과제
let 이름 :string = 'kim';
let 나이 :number = 20;
let 지역 :string = '서울';

let 노래 :{title : string, artist : string} = { title : 'a', artist : 'b'}

let project :{
    member : string[],
    days : number,
    started : boolean
} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}
