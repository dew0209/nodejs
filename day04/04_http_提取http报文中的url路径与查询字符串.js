//导入http模块
const http = require('http');

const server = http.createServer((request, response) => {
    //实例化url对象
    //let url = new URL('http://www.baidu.com/search?a=100&b=200'); //或
    //let url = new URL('/search?a=100&b=200', 'http://www.baidu.com');
    let url = new URL(request.url, 'http://www.baidu.com');
    console.log(url);
    console.log(url.searchParams.get('keyword'));
    response.end('url new');
});
server.listen(9000, () => {
    console.log('服务已经启动');
})