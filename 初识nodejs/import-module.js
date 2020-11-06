var os = require('os');
var path = require('path');

console.log('获取当前机器的CPU信息：' + JSON.stringify(os.cpus()));
console.log('获取当前机器的内存信息：' + os.totalmem());

console.log('获取文件的绝对路径' + path.dirname('./asdf/asdsss/asd.txt'));
console.log('获取文件的后缀名' + path.extname('w.txt'))