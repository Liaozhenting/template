# template
Node.js + gulp 合并静态页模版，文件更新自动热重载。浏览器可预览目录下的页面

使用的是ejs的语法.其实你用ejs文件也可以.

模板文件放在component文件夹.模板文件也可以放在其它文件夹,只要你引用的路径是对的

HTML文件放在src文件夹.(必须)

解析后输出的文件在dist文件里

在src目录下的index.html文件里引用模板
```html
<% include ../component/head.html %>
...我的代码
<% include ../component/foot.html %>
```

这样就在index.html方便的复用html头部模板和脚部模板

## 使用
请先确定安装了Node.js
```
npm install
gulp dev 启动一个自动热重载的服务器，默认端口3000.浏览器可以预览目录下的页面
gulp ejs 合并模版
```
遍历src里面的文件,输出到dist目录.


