//1.导入http模块
const http = require('http');

const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.end('你好啊'); //设置响应体
});
server.listen(9000, () => {
    console.log('服务已经启动');
})