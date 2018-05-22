function foo(a) {
    var b = a + 5;
    function bar(c) {
        console.log(a,b,c);
    }
    bar(4)
}
foo(6);//6,11,4
/**
 * 1.全局作用域，里面只有一个标识符foo,因为包含foo的直接作用域就是全局作用域
 * 2.函数foo所创建的作用域，包含a，b，bar，同理
 * 3.函数bar所创建的作用域，包含c，同理
 */
function const1(ste,s) {
    eval("var b = ste");
    console.log(b,s)
}
var b = 2;
const1(4,1);
