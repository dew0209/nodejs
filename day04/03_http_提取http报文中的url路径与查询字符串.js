//导入http模块
const http = require('http');

//1.导入url模块
const url = require('url');

const server = http.createServer((request, response) => {
    //console.log(request.url);
    //let res = url.parse(request.url);
    //console.log(res);
    //console.log(res.pathname);
    //console.log(res.query);

    let res = url.parse(request.url, true)
    let keyword = res.query.keyword;
    console.log(keyword);
    response.end('url');
});
server.listen(9000, () => {
    console.log('服务已经启动');
})