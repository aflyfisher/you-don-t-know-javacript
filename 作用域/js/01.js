function foo(a) {
    console.log(a+b);//b is not defined，因为当执行这段代码的时候b还没进行定义
    b = a;//在当前作用域中找到了b；
    console.log(a+b)//4,a = 2；b= 2；
}
fool(2)
