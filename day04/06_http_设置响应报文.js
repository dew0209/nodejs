//导入http模块
const http = require('http');

const server = http.createServer((request, response) => {
    //1.设置响应状态码
    response.statusCode = 404;
    //2.响应状态的描述
    response.statusMessage = 'i love you';
    //3.响应头
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.setHeader('aaaaa', ['a', 'b', 'c']);
    //4.响应体的设置
    response.write('啊哈哈哈');
    response.end('response');
});
server.listen(9000, () => {
    console.log('服务已经启动');
})