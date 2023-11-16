const http = require('http');
const fs = require('fs');
const path = require('path');

let mimes = {
    html: 'text / html',
    css: 'text / css',
    js: 'text / javascript',
    png: 'image / png',
    jpg: 'image / jpeg',
    gif: 'image / gif',
    mp4: 'video / mp4',
    json: 'application / json'
};

const server = http.createServer((request, response) => {
    if (request.method !== 'GET') {
        response.statusCode = 405;
        response.end('<h1>405 Method Not Allowed</h1>')
        return;
    }
    console.log('接受请求！！！！');
    let { pathname } = new URL(request.url, 'http://127.0.0.1');
    let root = __dirname + '/page';
    let filePath = root + pathname;
    let ext = path.extname(filePath).slice(1);
    let type = mimes[ext];
    if (type) {
        response.setHeader('content-type', type + ";charset=utf-8");
    } else {
        response.setHeader('content-type', 'application/octet-stream');
    }
    console.log(ext);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            //设置字符集
            response.setHeader('content-type', 'text/html;charset=utf-8');
            // 统一错误处理
            console.log(err.code);
            switch (err.code) {
                case 'ENOENT':
                    response.statusCode = 404;
                    response.end('<h1>404 NOT FOUND</h1>');
                    return;
                case 'EPERM':
                    response.statusCode = 403;
                    response.end('<h1>403 Forbidden</h1>');
                    return;
                default:
                    response.statusCode = 500;
                    response.end('<h1>Internal Server Error</h1>');
                    return;
            }

            return;
        }
        response.end(data);
    })
});
server.listen(9000, () => {
    console.log('服务已经启动');
})