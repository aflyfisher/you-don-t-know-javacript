a = 2;
var a;
console.log(a);

if (d) {
    function foo() { console.log("d"); }
}
else {
    function foo() { console.log("b");}
}
var d;
//上面的代码执行完后，确定a是一个udefined，所以执行false语句；
foo(); // 由于此时a是一个undefined，所以在判断语句中执行的额是else语句，所以结果是"b"
d = true;
foo();//,此时早已经判断过了，foo的声明也已成定局，所以是"b";
