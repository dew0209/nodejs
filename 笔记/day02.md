**buffer**

概念和特定

```txt
概念：
1.buffer是类似一个数组的对象，用于表示固定长度的字节序列
2.buffer本质是一段内存空间，专门用来处理二进制数据
特点：
1.buffer大小固定且无法调整
2.buffer性能较好，可以直接对计算机内存进行操作
3.每个元素的大小为1字节
```

使用和常用操作：

```javascript
//buffer的使用
//1.alloc
let buf = Buffer.alloc(10); //在创建之前把各个数据清空，不会包含遗留数据
console.log(buf); //<Buffer 00 00 00 00 00 00 00 00 00 00>
//2.allocUnsafe
let buf_2 = Buffer.allocUnsafe(10); //可能包含遗留数据
console.log(buf_2); //<Buffer 00 00 00 00 00 00 00 00 00 00>
//3.from 将数据转换为buffer unicode编码形式
let buf_3 = Buffer.from('hello');
console.log(buf_3); //<Buffer 68 65 6c 6c 6f>
let buf_4 = Buffer.from([104, 201]);
console.log(buf_4); //<Buffer 68 c9>

//常见操作
//buffer与字符串的转换
let buf_5 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf_5.toString()) //iloveyou   utf-8编码转换

//buffer的读写 []的方式
let buf_6 = Buffer.from('hello');
console.log(buf_6); //<Buffer 68 65 6c 6c 6f>  十六进制
console.log(buf_6[0]); //104 十进制表示
console.log(buf_6[0].toString(2)); //1101000 二进制表示
buf_6[0] = 95; //十进制数值就行
console.log(buf_6); //<Buffer 5f 65 6c 6c 6f>
console.log(buf_6.toString());

//溢出
let buf_7 = Buffer.from('hello');
buf_7[0] = 361; //0001 0110   1001 --> 舍弃高于8位的就变成了 01101001
console.log(buf_7); //<Buffer 69 65 6c 6c 6f>

//中文
let buf_8 = Buffer.from('您好');
console.log(buf_8); //<Buffer e6 82 a8 e5 a5 bd>  utf-8中文常常3个字节
```

**fs**

```txt
fs模块可以实现与硬盘的交互
例如：
	文件的创建，删除，重命名，移动，写入，读取
	文件夹的相关操作
```

写入：

```txt
//异步的
fs.writeFile(file,data[,option],callback)
参数说明：
	1.file文件名
	2.data待写入的数据
	3.options选项设置（可选）
	4.callback写入函数
	
//同步的
fs.writeFileSync(file, data);
参数说明：
	1.file文件名
	2.data待写入的数据
```

追加

```txt
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
```

流式写入

```txt
fs.createWriteStream(path[,options]);
参数：
	path 文件路径
	options 选项配置（可选）
应用场景：
	下载文件
	安装软件
	保存程序日志
	编辑器保存文件
	当需要持久化保存数据时，就要想到文件写入
```

