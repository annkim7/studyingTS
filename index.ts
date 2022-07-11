//1-8
let 이름 :123;
이름 = 123;

let 접니다:'대머리' | '솔로';
접니다 = '대머리'

function 함수(a :'hello') :1 | 0{
    return 1
}

//과제
function 함수1(a :'가위' | '바위' | '보') :('가위' | '바위' | '보')[]{
    return ['가위']
}

var 자료 = {
    name : 'kim'
} as const

function 내함수(a :'kim'){

}

내함수(자료.name)