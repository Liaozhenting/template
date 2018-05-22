let fs = require('fs');
let ejs = require('ejs');
let path = require('path');

let walk = require('walk')

let gulp = require('gulp');
let browserSync = require('browser-sync');
let distDir ='./dist';
let srcDir ='./src'  
gulp.task('ejs',function(){
  let root = path.join(__dirname);
  let files = [], dirs = [];
  
  let getFileList = function (folder) {
    let walker = walk.walk(folder, { followLinks: false })
    walker.on('file', function (roots, stat, next) {
      files.push(roots + "/" + stat.name);
      // console.log(roots)
      let str = fs.readFileSync(roots+'/'+ stat.name, 'utf8');
      let content = ejs.render(str, { filename: stat.name });
      if(!fs.existsSync(path.join(__dirname,'/dist'))){
        fs.mkdir(path.join(__dirname,'/dist'));
      }
      fs.writeFileSync(__dirname+'/dist/'+stat.name, content, 'utf8');
      next()
    })
  
    // walker.on('directory',function(roots,stat,next){
    //   dirs.push(roots+'/'+stat.name);
    //   next();
    // })
  
    walker.on('end', function () {
      files.forEach(function(ele){
        console.log('已解析文件:' + ele)
      })

    })
  }
  getFileList(path.join(root, '/src'));
})

gulp.task('ejs-watch',['ejs'],browserSync.reload);

gulp.task('dev',function(){
  browserSync.init({
    server:{
      baseDir:distDir
    },
    reloadDebounce:0
  })

  gulp.watch(['./components/**.**','./src/**.**'],['ejs-watch'])
})