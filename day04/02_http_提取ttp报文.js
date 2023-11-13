//1.导入http模块
const http = require('http');

const server = http.createServer((request, response) => {
    //1.声明一个变量
    let body = '';
    //2.绑定事件
    request.on('data', chunk => {
        body += chunk; //chunk是一个buff，+= 会自动转成字符串
    })
    request.on('end', () => {
        console.log(body);
        response.end('hello http');
    })
});
server.listen(9000, () => {
    console.log('服务已经启动');
})