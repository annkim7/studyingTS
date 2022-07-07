//1-4
let 회원 :(number |  string) = 123;
let 회원들 :(number | string)[] = [1, '2',3];
let 오브젝트 :{ a : string | number } = { a : '123' };

let 이름 :any;
이름 = 123;
이름 = true;
이름 = [];

let 이름1 :unknown;
이름1 = 123;
이름 = {};

let 변수1 :string = 이름;

// let 나이 :string|number;
// 나이+1; 안됨

// let 나이 :unknown = 1;
// 나이-1; 안됨

//과제1
let user :string = 'kim';
let age :undefined | number = undefined;
let married :boolean = false; 
let 철수 :(string|number|undefined|boolean)[] = [user, age, married];

//과제2
let 학교 : {
    score : (number|boolean)[],
    teacher : string,
    friend : string|string[]
}
= {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]