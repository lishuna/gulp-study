const http = require('http');
const fs = require('fs');
const path = require('path');
const color = require('color');

http.createServer((request, reporse) => {
    console.log('监听成功'.red);
}).listen(8008);

fs.stat('../../readme.txt', (err, stats) => {
    if (err) throw err;
    console.log(`文件的属性是: ${stats.toString()}`.yellow);
});
const str = fs.readFileSync('../../readme.txt').toString();
console.log(str.green);