let fs = require('fs');
let ejs = require('ejs');
let path = require('path');
// let str = fs.readFileSync(path.join(__dirname,'./src/index.html'),'utf8');
// let content = ejs.render(str,{filename:'index.html'});

// fs.writeFileSync(path.join(__dirname,'./dist/index.html'),content,'utf8');  
// console.log('成功了');

let walk = require('walk')
// console.log(walk)
let root = path.join(__dirname);

let files = [], dirs = [];

let getFileList = function (path) {
  let walker = walk.walk(path, { followLinks: false })
  walker.on('file', function (roots, stat, next) {
    files.push(roots + "/" + stat.name);
    // console.log(roots)
    let str = fs.readFileSync(roots+'/'+ stat.name, 'utf8');
    let content = ejs.render(str, { filename: stat.name });

    fs.writeFileSync(__dirname+'/dist/'+stat.name, content, 'utf8');
    next()
  })

  // walker.on('directory',function(roots,stat,next){
  //   dirs.push(roots+'/'+stat.name);
  //   next();
  // })

  walker.on('end', function () {
    console.log('已解析文件:' + files);
    // console.log('dirs:'+dirs);
  })
}
getFileList(path.join(root, '/src'));