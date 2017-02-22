'use strict';
import React from 'react';

export default class HEAD extends React.Component{
  render(){
    return (
      <head>
        <title>{this.props.title}</title>
        <link href='//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet'/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        {this.props.children}
      </head>
    );
  }
};
