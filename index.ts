//1-9

type 함수타입 = (a :string) => number;

() => { return 10 }

let 함수 :함수타입 = function (a){
    return 10
}

type Member = {
    name : string,
    age : number,
    plusOne : ( x : number ) => number,
    changeName : () => void
}


let 회원정보 = {
    name : 'kim',
    plusOne(a){
        return a + 1;
    },
    changeName : () =>{

    }
}

//회원정보.plusOne()

function 함수1(a){
    a()
}
function 함수2(){
    
}

함수1(함수2)