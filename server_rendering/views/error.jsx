import React from 'react';

export default class Error extends React.Component{
  render(){
    return (
      <html>
        <head>
          <title>{this.props.message}</title>
          <link type='text/css' rel='stylesheet' href='/css/style.css'/>
        </head>
        <body>
          <div>{this.props.error.status}</div>
          <div>{this.props.error.stack}</div>
          <script type='text/javascript' src='/js/jquery.min.js'/>
          <script type='text/javascript' src='/js/bootstrap.min.js'/>
        </body>
      </html>
    );
  }
};
