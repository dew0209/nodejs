//导入http模块
const http = require('http');

const server = http.createServer((request, response) => {
    let url = new URL(request.url, 'http://localhost:9000/');
    //console.log(request.method);
    if (request.method == 'POST' && url.pathname == '/login') {
        response.end('login');
    } else if (request.method == 'GET' && url.pathname == '/reg') {
        response.end('reg');
    } else {
        response.end('NOT FOUND');
    }
});
server.listen(9000, () => {
    console.log('服务已经启动');
})