//1-6
// function 함수(x :number | string){
//     if(typeof x === 'string'){
//         return x + '1'
//     }else{
//         return x + 1
//     }
// }
// 함수(2)
function 함수(x) {
    var array = [];
    // if(typeof x === 'number'){
    //     array[0] = x;
    // }else{
    // }
    array[0] = x;
}
함수(123);
//과제1
var array1 = ['1', 2, '3'];
function cleaning(x) {
    var result = [];
    x.forEach(function (y) {
        if (typeof y === 'string') {
            result.push(parseFloat(y));
        }
        else {
            result.push(y);
        }
    });
    return result;
}
console.log(cleaning(array1));
//과제2
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function 만들함수(x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return 'no';
    }
}
만들함수({ subject: 'math' }); //이 경우 'math'를 return
만들함수({ subject: ['science', 'art', 'korean'] }); //이 경우 'korean'을 return
만들함수({ hello: 'hi' }); //이 경우 타입에러 나면 됩니다 
console.log(만들함수({ subject: 'math' }));
console.log(만들함수({ subject: ['science', 'art', 'korean'] }));
console.log(만들함수({ hello: 'hi' }));
