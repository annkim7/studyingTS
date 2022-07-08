//1-5
// function 함수(x :number) :number{
//     return x * 2
// }

// 함수(30)

// function 함수(x :number) :void {
//     1 + 1
// }

// function 함수(x? :number) :void {
//     1 + 1
// }

// function 함수(x :number | undefined) :void {
//     1 + 1
// }

// function 함수(x :number | undefined) :void {
//     if(x의 타입이 숫자면){
//         console.log(x + 3);
//     }
// }

//과제1
function hello(x? :string){
    if(x){
        console.log('안녕하세요' + x)
    } else {
        console.log('이름이 없습니다')
    }
}

hello('홍길동')

//과제2
function count(x :number | string) :number{
    return x.toString.length
}

count('325')

//과제3
function marry(money :number, house :boolean, charm :string) :string | void {
    let score :number = 0;
    score += money;
    if(house === true){
        score += 500
    }
    if(charm === '상'){
        score += 500
    }
    if(score >= 600){
        return '결혼가능'
    }
}

console.log(marry(100, true, '상'));