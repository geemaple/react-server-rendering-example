# react-server-rendering-example

An example of React server-side rendering with [express-react-views](https://github.com/reactjs/express-react-views) view engine

###how to run

*server_rendering/*
```sh
$ npm install
$ ./node_modules/.bin/webpack
$ npm start
```

Then navigate to [http://localhost:3000](http://localhost:3000) and
click on the button to see some reactive events in action.

*server_rendering/*
- Express framework
- Only JSX template file to write
- Upgrade to javascript ES6
- Render react on the `document` instead of some `<child id='container'>`
- Rename express-react-views `index.js` to `jsxTemplate.js` because `renderToString` is needed for server rendering

- - -

# react-server-rendering-example

[express-react-views](https://github.com/reactjs/express-react-views)React服务器渲染例子🌰

##如何运行

*server_rendering/*
```sh
$ npm install
$ ./node_modules/.bin/webpack
$ npm start
```
在浏览器打开[http://localhost:3000](http://localhost:3000)点击界面按钮，会看到数字在递增.

###tech glimpse
*server_rendering/*
- Express框架
- 只需要写.jsx文件即可
- 升级javascript语法到ES6
- 直接将react挂在到DOM根节点上，即`document`
- 重命名 express-react-views `index.js` 为 `jsxTemplate.js` 因为服务器渲染需要 `renderToString`
