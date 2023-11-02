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