**静态资源服务**

```txt
是指内容长时间不发生改变的资源，图片，视频，css，js，html等
动态资源是指内容经常更新得资源，百度首页，网易首页等
```

**网站根目录或静态资源目录**

```txt
http服务在那个文件夹中寻找静态资源，那个文件夹就是静态资源目录，也称之为网站根目录
```

**网页中的url**

```txt
绝对路径：
http://www.baidu.com 直接向目标资源发送请求，容易理解。
//xxxx.com/web 与页面url的协议凭接形成完整url在发送请求。
/web	与页面url协议，主机名，端口凭接形成完整url再发送请求。
相对路径：
相对路径在发送请求时，需要与当前页面url路径进行计算，得到完整的url后，再发送请求
./css/app.css
js/app.js
../img/logo.png

小结：
包括但不限于如下场景：
1.a标签href
2.link标签href
3.script标签src
4.img标签src
5.video audio标签src
6.form中的action
7.ajax请求中的url
```

**设置mime类型**

```txt
媒体类型是一种标准，用来表示文档，文件或字节流的性质和格式
```

```javascript
mime类型结构 [type]/[subType]
例如：text/html text/css image/jpeg application/json
```

```txt
http服务可以设置响应头content-type来表明响应体的mime类型，浏览器会根据该类型决定如何处理资源。
常见的：
html：text/html
css：text/css
js：text/javascript
png：image/png
jpg：image/jpeg
gif：image/gif
mp4：video/mp4
json：application/json
```

==对于未知的资源类型，可以选择 `application/octet-stream`类型，浏览器在遇到该类型的响应时，会对响应体内容进行独立存储，也就是我们常见的`下载`效果==

==charset=utf-8 可以解决乱码 或者 <meta charset="UTF-8"> 也行 响应头的优先级更高，只需在html里面设置就好了，对应的css和js会复用html里面的字符集编码的==

**静态资源错误处理**

```javascript
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
```

**GET和POST场景**

```txt
GET：一般用来获取数据
  地址栏url直接访问
  点击a连接
  link引入css
  script标签引入js
  video与audio引入多媒体
  img标签引入图片
  form标签method为get
  ajax中的get
POST：一般用来提交数据
	form标签中method为post
	ajax的post请求
区别：
	作用，GET主要用来获取数据，POST主要用来提交数据
	参数位置，GET带参数请求是将参数缀到url之后，post带参数请求是将参数放到请求体中
	安全性，post请求相对get安全一些，因为浏览器中参数会暴露在地址栏
	get请求大小有限制，一般为2k，而post请求则没有大小限制
```

**模块化**

```txt
什么是模块化与模块
	将一个复杂的程序文件依据一定规则（规范）拆分成多个文件的过程称之为模块化
	其中拆分出的每个文件就是一个模块，模块的内部数据是私有的，不过模块可以暴露内部数据以便其他模块使用
什么是模块化的项目
	编码时是按照模块一个一个编码的，整个项目就是一个模块化的项目
模块化的好处
	防止命名冲突
	高复用性
	高维护性
```

使用方式-简单方式：

```txt
me.js

function tiemo() {
    console.log('贴膜...')
}

//暴露数据
module.exports = tiemo;


index.js

//导入模块
const tiemo = require('./me.js');

tiemo();
```

**暴露模块数据**

```txt
模块暴露数据的方式有两种
1.module.exports = value
2.exports.name = value


//暴露数据
module.exports = {
     tiemo,
     niejiao
};

exports.tiemo = tiemo;
exports.niejiao = niejiao;
```

==注意：module.exports可以暴露任意数据，不能使用`exports = value`的形式暴露数据，模块内部module与exports的隐式关系 `exports = module.exports = {}`==

**导入模块**

```txt
在模块中使用require传入文件路径即可引入文件
const test = require('./me.js');

require使用的一些注意事项
	1.对于自己创建的模块，导入时路径建议写相对路径，且不能省略./和../
	2.js和json文件导入时可以不用写后缀，c/c++编写的node扩展文件也可以不写后缀，但是一般用不到
	3.如果导入其他类型的文件，会以js文件进行处理
	4.如果导入的路径是个文件夹，则会首先检测该文件夹下package.json文件中main属性对应的文件
		如果mian属性不存在，或者package.json不存在，则会检测文件夹下的index.js和index.json,如果还没找到，就会报错
	5.导入node.js内置模块时，直接require模块的名字即可，无需加./和../
```

==require还有一种场景，会在包管理章节介绍==

==module.exports exports以及require这些都是CommonJs模块化规范中的内容，而node.js实现了CommconJS模块化规范==

**导入自定义模块**

```txt
require导入自定义模块
 1.将相对路径转为绝对路径，定位目标文件
 2.缓存检测
 3.读取目标文件代码
 4.包裹一个函数并执行（自执行函数）。通过 argument.callee.toString()查看自执行的函数
 5.缓存模块的值
 6.返回 module.exports 的值
```

**包管理工具**

```txt
管理包的应用软件，可以对包进行下载安装，更新，删除，上传等操作
借助包管理工具，可以快速开发项目，提升开发效率
包管理工具是一个通用的概念，很多变成语言都有包管理工具，所以掌握好包管理工具特别有用

常用的包管理工具
	npm
	yarn
	cnpm
```

**npm的介绍与安装**

```txt
npm -v：查看是否安装了
```

**使用**

```txt
PS D:\workspace\vscode\nodejs\day05\npm\01_npm> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (01_npm) test    #包名
version: (1.0.0) 1.0.0				 #包的版本
description: 学习npm						#包的描述
entry point: (index.js)				 #包的入口文件
test command:									 #脚本配置
git repository:								 #git残酷
keywords:
author:												 #作者
license: (ISC) 								 #开源证书
About to write to D:\workspace\vscode\nodejs\day05\npm\01_npm\package.json:

{
  "name": "test",
  "version": "1.0.0",
  "description": "学习npm",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)
PS D:\workspace\vscode\nodejs\day05\npm\01_npm> 
```

注意事项：

1. package name（包名）不能使用中文，大写。默认值是文件夹名称，所以文件夹名称也不能使用中文和大写
2. version（版本号）要求x.x.x的形式定义，x必须是数字，默认是1.0.0
3. isc证书与mit证书功能上是相同的，关于开源证书百度搜搜
4. package.json可以手动创建与修改
5. 使用npm init -y 或者 npm init --yes 极速创建package.json

**npm搜索包**

```txt
1.命令行 npm s/search 关键字
2.网站搜索 https://www.npmjs.com

下载：
npm install 包名
npm i 包名

运行之后文件夹下会增加两个资源
node_modules 文件夹 存放下载包
package-lock.json 包的锁文件，用来锁定包的版本
```

