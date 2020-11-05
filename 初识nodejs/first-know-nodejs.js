var bar = 'hello!'

//console.log(bar);
//console.log(window)
//console.log(document)

//读写文件，fs模块
var fs = require('fs');
var http = require('http');

//第一个参数是文件相关路径，第二个参数是回调函数，error与data
fs.readFile('./readData.txt', function(error, data) {
    //请求成功的话 data数据，error就是null
    //强求失败的话 data为undefined error错误对象
    if (error) {
        console.log('读取文件失败！')
    } else {
        console.log('读取文件成功！')
        console.log('data:' + data, 'error:' + error);
    }
});
fs.writeFile('./writeData.md', 'This is the fs-writeFile!', function(error) {
    //成功的话 error为null，否则为错误对象
    if (error) {
        console.log('写入文件失败！')
    } else {
        console.log('写入文件成功！')
    }
})

//我们可以构建一个web服务器！http核心模块
//返回一个Server实例,提供对数据的服务
var server = http.createServer();
//注册request请求事件
server.on('request', function() {
    console.log('收到客户端的请求了！')
});
//启动服务器.绑定端口号
server.listen(5555, function() {
    console.log('服务器启动成功了，可以通过http://127.0.0.1:5555/ 进行访问');
})