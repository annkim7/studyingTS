//1-9
(function () { return 10; });
var 함수 = function (a) {
    return 10;
};
var 회원정보 = {
    name: 'kim',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
    }
};
//회원정보.plusOne()
function 함수1(a) {
    a();
}
function 함수2() {
}
함수1(함수2);
