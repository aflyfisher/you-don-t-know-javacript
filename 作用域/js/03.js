/**
 * @description 函数作用域和块作用域
 * @author shuaifeng zhang
 * @param {any} param
 */

function getSum(params) {
    function as(num){
        return num*2+params;
        // 在这里的params可不是属于as的变量,而是属于函数getSum的作用域中的变量（因为在那里定义的），只是在这里进行了访问而已
    }
    var s = as(params);
    console.log(s*2)
}
getSum(10);//60
// 全局作用域中的变量：getSum；
// getSum函数作用域中的变量：as，parames，s，
//as函数作用域变量：num
function foo(){
    function bar(a){
        i = 3;
        console.log(i+a);
    }
    for (var i = 0; i < 10; i++) {
        bar(i*2)
    }
}
foo()
// 3,11,11,11....
