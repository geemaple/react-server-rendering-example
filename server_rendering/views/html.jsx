'use strict';
import React from 'react';

export default class HTML extends React.Component{
  render(){
    return (<html>{this.props.children}</html>);
  }
};
