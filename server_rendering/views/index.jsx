'use strict';

import React from 'react';
import HTML from './html.jsx';
import HEAD from './header.jsx';
import BODY from './body.jsx';

export default class HelloMessage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {count: 0 };
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    var {settings, _locals, cache, ...param} = this.props;
    var cmd = 'var __props=' + safeStringify(param) + ';';
    
    return (
      <HTML>
        <HEAD>
          <link href='/css/style.css' rel='stylesheet'></link>
        </HEAD>
        <BODY>
          <button onClick={this.handleClick.bind(this)}>
            Click {this.props.name}! Number of clicks: {this.state.count}
          </button>

          <script dangerouslySetInnerHTML={{__html:cmd}}></script>
          <script src="/component/index.js"></script>
        </BODY>
      </HTML>
    )
  }
};

function safeStringify(obj) {
  return JSON.stringify(obj)
    .replace(/<\/(script)/ig, '<\\/$1')
    .replace(/<!--/g, '<\\!--')
    .replace(/\u2028/g, '\\u2028') // Only necessary if interpreting as JS, which we do
    .replace(/\u2029/g, '\\u2029') // Ditto
}

if (typeof window !== 'undefined') { //client rendering
    var component = React.createFactory(HelloMessage);
    ReactDOM.render(component(__props), document);
}
