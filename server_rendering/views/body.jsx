'use strict';
import React from 'react';

export default class BODY extends React.Component{
  render(){
    return (
        <body>
          <script src='/js/react.min.js'/>
          <script src='/js/react-dom.min.js'/>
          <script src='/js/jquery.min.js'/>
          <script src='/js/bootstrap.min.js'/>
          {this.props.children}
        </body>
    );
  }
};
