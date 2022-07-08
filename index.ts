//1-6

// function 함수(x :number | string){
//     if(typeof x === 'string'){
//         return x + '1'
//     }else{
//         return x + 1
//     }
// }

// 함수(2)

function 함수(x :number | string){

    let array :number[] = [];
    // if(typeof x === 'number'){
    //     array[0] = x;
    // }else{

    // }
    array[0] = x as number;
}


함수(123)

//과제1
let array1 =  ['1', 2, '3'];


function cleaning(x :(number | string)[]){    

    let result :number[] = [];

    x.forEach((y) =>{
        if(typeof y === 'string'){
            result.push(parseFloat(y))
        }else{
            result.push(y)
        }
    });

    return result;
}

console.log(cleaning(array1));

//과제2
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function 만들함수(x :{subject : string | string[]} ){

    if(typeof x.subject === 'string' ){
        return x.subject
    }else if(Array.isArray(x.subject) ){
        return x.subject[x.subject.length -1]
    }else{
        return 'no'
    }
}


만들함수( { subject : 'math' } )  //이 경우 'math'를 return
만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다 


console.log(만들함수( { subject : 'math' } ))
console.log(만들함수( { subject : ['science', 'art', 'korean'] } ))
console.log(만들함수( { hello : 'hi' } ) )