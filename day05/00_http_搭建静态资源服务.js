const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log('接受请求！！！！');
    let { pathname } = new URL(request.url, 'http://127.0.0.1');
    let root = __dirname + '/page';
    let filePath = root + pathname;
    console.log(filePath);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.statusCode = 500;
            response.end('error~~');
            return;
        }
        response.end(data);
    })
});
server.listen(9000, () => {
    console.log('服务已经启动');
})