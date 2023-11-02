const fs = require('fs');

//参数：旧路径 新路径 回调函数
//异步
fs.rename('../论语.txt', './论语.txt', err => {
    if (err) {
        console.log('操作失败');
        return;
    }
    console.log('操作成功');
});
console.log(1 + 1);
//同步
fs.renameSync('./论语.txt', '../论语.txt');