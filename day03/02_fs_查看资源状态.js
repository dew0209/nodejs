const fs = require('fs');

fs.stat('./0_fs_文件删除.js', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    console.log(data.isFile()); //是否是一个文件 true是 false不是
    console.log(data.isDirectory()); //是否是一个文件夹 true是 false不是
})