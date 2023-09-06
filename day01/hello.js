console.log('hello Node.js');

//node.js中不能使用BOM和DOM的API
//console.log(window);
//console.log(document);


//定时器可以用
setTimeout(() => {
    console.log('定时器');
}, 1000);

//global顶级对象
console.log(global);
//globalThis顶级对象
console.log(globalThis);
console.log(global === globalThis);