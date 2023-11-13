//1.导入http模块
const http = require('http');

const server = http.createServer((request, response) => {
    //获取请求方法
    console.log(request.method);
    console.log(request.url);
    console.log(request.httpVersion);
    console.log(request.headers);
    console.log(request.headers.host);
    response.end('http');
});
server.listen(9000, () => {
    console.log('服务已经启动');
})