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
    return (
      <Layout script='/component/index.js' {...this.props}>
        <button onClick={this.handleClick.bind(this)}>
          Click {this.props.name}! Number of clicks: {this.state.count}
        </button>
      </Layout>
    );
  }
};

if (typeof window !== 'undefined') {
    var container = document.getElementById('container');
    var props = JSON.parse(document.getElementById('parameters').innerHTML);
    var component = React.createFactory(HelloMessage);
    ReactDOM.render(component(props), container);
}
