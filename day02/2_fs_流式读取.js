//createReadStream  流式读取
const fs = require('fs');

const rs = fs.createReadStream('./观书有感.txt');
//绑定data事件  chunk 块
rs.on('data', chunk => {
    console.log(chunk); //65536 -> 64kb
})

rs.on('end', () => {
    console.log('读取完成');
})