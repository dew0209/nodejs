//fs = file system
//1.导入fs模块
const fs = require('fs');
//2.写入文件
/**
 * fs.writeFile(file,data[,option],callback)
 * 参数说明：
 * 1.file文件名
 * 2.data待写入的数据
 * 3.options选项设置（可选）
 * 4.callback写入函数
 */
//异步的
fs.writeFile('./座右铭.txt', '三人行，必有我师焉', err => {
    //err 写入失败：错误对象 写入成功：null
    if (err) {
        console.log('写入失败');
        return;
    }
    console.log('写入成功');
});
//一般这个比上面先输出，异步的。
console.log(1 + 1);

//同步的
fs.writeFileSync('./data.txt', 'test');
console.log(1 + 1);