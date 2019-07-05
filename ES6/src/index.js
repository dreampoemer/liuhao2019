{
    let a = 1;
    var b = 2;
}
console.log(b);
// console.log(a);//a is not defined,表明，let声明的变量只在他所在的代码块有效

//暂时性死区，1.let声明变量之前使用，报错；2.不允许重复声明
console.log(foo);
var foo = 2;
// console.log(foo1);
let foo1 = 2;//foo1 is not defined。与var声明变量的又一个区别，不存在变量提升。var声明变量之前打印该变量为undefined，let则直接报错ReferenceError

var tmp = 123;
if(true){
    tmp = 'abc';
    // let tmp;
}
//输出结果：tmp is not defined。
//上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

const PI=3.14;
console.log(PI);
// PI=3;
// console.log(PI);//Assignment to constant variable.表明，改变常量的值会报错。

// const foo2;
// console.log(foo2);// Missing initializer in const declaration.表明，只声明不赋值，就会报错。

// if(true){
//     console.log(MAX); // ReferenceError
//     const MAX = 5;
// }
// console.log(MAX);// MAX is not defined.const的作用域与let命令相同：只在声明所在的块级作用域内有效。onst命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。

var aa = 1;
console.log(window.aa);
let bb = 2;
console.log(window.bb);


/*

    浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
    浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
    Node 里面，顶层对象是global，但其他环境都不支持。

*/