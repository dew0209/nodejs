//readFile          异步读取
//readFileSync      同步读取
//createReadStream  流式读取

let fs = require('fs');

//异步读取
fs.readFile('./观书有感.txt', (err, data) => {
    if (err) {
        console.log('读取失败');
        return;
    }
    console.log(data.toString());
});
//正常比上面先输入
console.log(1 + 1);
//同步读取
let data = fs.readFileSync('./观书有感.txt');
console.log(data.toString());