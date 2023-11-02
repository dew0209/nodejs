const fs = require('fs');
//appendFile追加
// fs.appendFile('./座右铭.txt', ',则其善者而从之，则其不善者而改着', err => {
//     if (err) {
//         console.log('追加失败');
//         return;
//     }
//     console.log('追加成功');
// });

// fs.appendFile('./座右铭.txt', '\r\n温故而知新，可以为师矣', err => {
//     if (err) {
//         console.log('追加失败');
//         return;
//     }
//     console.log('追加成功');
// });
//writeFile 实现追加写入  第三个参数
fs.writeFile('./座右铭.txt', 'love love love', { 'flag': 'a' }, err => {
    if (err) {
        console.log('追加失败');
        return;
    }
    console.log('追加成功');
})