const fs = require('fs');

console.log(__dirname + '/index.html'); //D:\workspace\vscode\nodejs\day03/index.html

const path = require('path');
console.log(__dirname); //D:\workspace\vscode\nodejs\day03
//resolve 拼接规范的绝对路径 一般都是前面是__dirname后面是相对路径
console.log(path.resolve(__dirname, './index.html')); //D:\workspace\vscode\nodejs\day03\index.html
console.log(path.resolve(__dirname, 'index.html')); //D:\workspace\vscode\nodejs\day03\index.html
console.log(path.resolve(__dirname, '/index.html')); //D:\index.html

//sep 分隔符
console.log(path.sep); //windows \ linux /

//parse()  解析路径并返回对象  __filename 文件的据对路径 D:\workspace\vscode\nodejs\day03\05_path模块.js
console.log(__filename)
console.log(path.parse(__filename));

console.log(path.basename(__filename)); //05_path模块.js
console.log(path.dirname(__filename)); //D:\workspace\vscode\nodejs\day03
console.log(path.extname(__filename)); //.js