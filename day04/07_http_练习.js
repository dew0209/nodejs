//导入http模块
const http = require('http');

const server = http.createServer((request, response) => {
    response.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            td{
                padding:20px 40px;
            }
            table tr:nth-child(odd){
                background-color: #aef;        
            }
            table tr:nth-child(even){
                background-color: #fcb;        
            }
            table,td{
                border-collapse:collapse;
            }
        </style>
    </head>

    <body>
    <table border="1">
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    </body>
    <script>
        let tds = document.querySelectorAll('td');
        tds.forEach(item => {
            item.onclick = function() {
                this.style.background='#222';
            }
        });
    </script>
    
    </html>`);
});
server.listen(9000, () => {
    console.log('服务已经启动');
})