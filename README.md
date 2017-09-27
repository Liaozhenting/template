# template
合并复用html模板

## 使用
```
node build
```

使用的是ejs的语法

模板文件放在component文件夹.

HTML文件放在src文件夹.

解析后输出的文件在dist文件里

在src目录下的index.html文件里引用模板
```
<% include ../component/foot.html %>
```
