**http**

请求

```txt
请求行：请求方法 + URL + http版本号
请求方法：
  Get：获取
  POST：新增
  PUT/PATCH：更新
  DELETE：删除
URL：
	统一资源定位符，其本身也是一个字符串
	协议名 + 主机名（ip或者域名） + 路径
```

```txt
请求头：key:value,...
```

```txt
请求体：内容是前后端约定好的

注意：请求头和请求体中间有个空行
```

响应

```txt
响应行：http版本号 + 响应状态码 + 响应状态的描述
响应状态码：
	200 请求成功
	403 禁止请求
	404 找不到资源
	500 服务器内部错误
更加详细的分类：
	1xx 信息响应
	2xx 成功响应
	3xx	重定向消息
	4xx	客户端错误响应
	5xx	服务端错误响应
响应状态描述：
	200 ok
	403 forbidden
	404 not found
	500 internal server error
```

```txt
响应头：key：value,....
```

```txt
响应体：响应体的内容格式式非常灵活的，常见的响应体格式有
	1.html
	2.css
	3.JavaScript
	4.图片
	5.视频
	6.json
```

**IP**

```txt
用来标识网络中的设备，实现设备间的通信
```

**端口**

```txt
实现不同主机之间不同应用程序的通信
```

**创建http服务**

```jade
//1.导入http模块
const http = require('http');

//2.创建服务对象
const server = http.createServer((request, response) => {
    response.end('Hello HTTP Server'); //设置响应体
});

//3.监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动');
})
```

**注意**

```txt
1.命令行 ctrl + c 停止服务
2.当服务启动后，更新代码必须重启服务才能生效
3.响应内容中文乱码的解决方法
		response.setHeader('content-type', 'text/html;charset=utf-8')
4.端口号被占用
		Error：listen EADDRINUSE：address already in use :::9000
		a.关闭当前正在运行监听端口的服务（使用较多）
		b.修改其他端口号
5.http协议默认端口号是80,Https协议默认端口是443。HTTP服务开发常用端口有3000，8080，8090，9000等。
```

**获取http请求报文**

```txt
请求方法			request.method
请求版本			request.httpVersion
请求路径			request.url
url路径			 require('url').parse(request.url).pathname
url查询字符串 require('url').parse(request.url,true).query
请求头				request.headers
请求体				request.on('data',function(chunk){})或request.end('end',function(){})
注意事项：
	1.request.url只能获取路径以及查询字符串，无法获取url中的域名以及协议的内容
	2.request.headers将请求信息转化成一个对象，并将属性名都转化成为了小写
	3.关于路径：如果访问网站的时候，只填写了ip地址或者是域名信息，此时请求路径是/
	4.关于favicon.ico：这个请求是属于浏览器自动发送的请求
```

```javascript
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
```

**提取http请求报文**

```javascript
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
```

**提取http请求报文中的url路径与查询字符串**

```javascript
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
```

**http设置响应报文**

```txt
设置响应状态码		response.statusCode
设置响应状态描述	response.statusMessage  用的非常少
设置响应头信息		response.setHeader('头名','头值')
设置响应体			 response.write('xx')或response.end('xxx')
```

```txt
write和end的两种使用情况
//1.write和end的结合使用	响应体相对分散
response.write('xx');
response.write('xx');
response.write('xx');
response.end();//每一个请求，在处理的时候必须要执行end方法

//2.单独使用end方法		响应体相对集中
response.end('xxx');
```

```javascript
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
```

