//★★★★★★★★★★ 伪代码 ★★★★★★★★★★
function require(file) {
    //1.将相对路径转为绝对路径，定位目标文件
    let absolutePath = path.resolve(__dirname, file);
    //2.缓存检测
    if (caches[absolutePath]) {
        return caches[absolutePath];
    }
    //3.读取目标文件代码
    let code = fs.readFileSync(absolutePath).toString();
    let module = {};
    let exports = module.exports = {};
    //4.包裹一个函数并执行（自执行函数）。通过 argument.callee.toString()查看自执行的函数
    (function(exports, require, module, __filename, __dirname) {
        const test = {
            name: 'hahah'
        }

        module.exports = test;

        console.log(arguments.callee.toString());
    })(exports, require, module, __filename, __dirname);
    //5.缓存模块的值
    caches[absolutePath] = module.exports;
    //6.返回 module.exports 的值
    return caches[absolutePath];
}

const m = require('./me.js');