//createWriteStream流式写入
//1.导入fs
const fs = require('fs');
/**
 * 
 * fs.createWriteStream(path[,options]);
 *      path 文件路径
 *      options 选项配置（可选）
 */
//2.创建写入流对象
const ws = fs.createWriteStream('./观书有感.txt');
//3.write
ws.write('半亩方塘一鉴开\r\n');
ws.write('天光云影共徘徊\r\n');
//4.关闭通道
ws.close();