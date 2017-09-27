let fs = require('fs');
let ejs = require('ejs');
let path = require('path');
let str = fs.readFileSync(path.join(__dirname,'./src/index.html'),'utf8');
let content = ejs.render(str,{filename:'index.html'});

fs.writeFileSync(path.join(__dirname,'./dist/index.html'),content,'utf8');  
console.log('成功了');