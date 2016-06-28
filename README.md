# react-server-rendering-example

An example of React server-side rendering with [express-react-views](https://github.com/reactjs/express-react-views) view engine

###how to run
####client_rendering/
```sh
$ npm install
$ npm start
```

####server_rendering/
```sh
$ npm install
$ webpack #if webpack command not available run $ npm install webpack -g
$ npm start
```

Then navigate to [http://localhost:3000](http://localhost:3000) and
click on the button to see some reactive events in action.

###tech glimpse
####client_rendering/
- Express with the default jade view engine
- both .jade and .jsx file needed
- javascript ES5 supported

####server_rendering/
- Express framework
- express-react-views for server_rendering
- Only JSX template file to write
- upgrade to javascript ES6

- - -

# react-server-rendering-example

[express-react-views](https://github.com/reactjs/express-react-views)React服务器渲染例子🌰

###如何运行
####client_rendering/
```sh
$ npm install
$ npm start
```

####server_rendering/
```sh
$ npm install
$ webpack #如果提示webpack不存在，执行 $ npm install webpack -g 再试试
$ npm start
```
在浏览器打开[http://localhost:3000](http://localhost:3000)点击界面按钮，会看到数字在递增.

###tech glimpse
####client_rendering/
- Express框架＋jade默认引擎
- 需要同时写.jade 和 .jsx文件实现
- 使用javascript ES5语法

####server_rendering/
- Express框架
- express-react-views引擎
- 只需要写.jsx文件即可
- 升级javascript语法到ES6
