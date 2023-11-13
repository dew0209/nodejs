const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log('接受请求！！！！');
    let { pathname } = new URL(request.url, 'http://127.0.0.1');
    if (pathname == '/') {
        let html = fs.readFileSync(__dirname + '/table扩展.html');
        response.end(html);
    } else if (pathname == '/index.css') {
        let css = fs.readFileSync(__dirname + '/index.css');
        response.end(css);
    } else {
        response.end("<h1>404 NOT FONUD</h1>");
    }
});
server.listen(9000, () => {
    console.log('服务已经启动');
})