const fs = require('fs');

//相对路径
// fs.writeFileSync('./index.html', 'love');
//绝对路径
// fs.writeFileSync('D:/index.html', 'love love');
//绝对路径 __dirname 所在文件的所在目录的绝对路径
console.log(__dirname);
fs.writeFileSync(__dirname + '/index.html', 'love');