**fs**

文件删除

```javascript
fs.unlink(path,callback);
fa.unlinkSync(path);
参数说明：
	path：文件路径
  callback：回调函数
```

文件夹操作

```txt
mkdir(path[,options],callback)/mkdirSync(path[,options])			创建文件夹
readdir(path[,options],callback)/readdirSync(path[,options])	读取文件夹
rmdir(path[,options],callback)/rmdirSync(path[,options])			删除文件夹
```

查看资源状态

```txt
fs.stat(path,callback);
```

**path**

```txt
path.resolve		拼接规范的绝对路径
path.sep				获取操作系统的路径分隔符
path.parse			解析路径并返回对象
path.basename		获取路径的基础名称
path.dirname		获取路径的目录名
path.extname		获取路径的扩展名
```

**http协议**

