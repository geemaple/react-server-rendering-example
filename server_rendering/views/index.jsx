'use strict';

import React from 'react';
import Layout from './layout.jsx';

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
    var styleSheets = [{key:'css001', type: 'text/css', rel: 'stylesheet', href: '/css/style.css'}];
    var javaScripts = [{key:'js001', type: 'text/javascript', src: '/component/index.js'}]
    return (
      <Layout propLink={styleSheets} propScript={javaScripts} {...this.props}>
        <button onClick={this.handleClick.bind(this)}>
          Click {this.props.name}! Number of clicks: {this.state.count}
        </button>
      </Layout>
    );
  }
};

if (typeof window !== 'undefined') { //client rendering
    var container = document.getElementById('container');
    var props = JSON.parse(document.getElementById('parameters').innerHTML);
    var component = React.createFactory(HelloMessage);
    ReactDOM.render(component(props), container);
}
