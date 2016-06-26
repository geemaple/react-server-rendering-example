'use strict';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import safeJsonStringify from 'safe-json-stringify';

export default class Layout extends React.Component{
  render(){
    if (typeof window == 'undefined') {
      var contentHtml = ReactDOMServer.renderToString(<div>{this.props.children}</div>);
      var { script, ...parameters } = this.props;
      var json = safeJsonStringify(parameters);
      var propStore = <script type='application/json'
          id={'parameters'}
          dangerouslySetInnerHTML={{__html: json}}>
      </script>;

      return (
        <html>
          <head>
            <title>{this.props.title}</title>
            <link type='text/css' rel='stylesheet' href='/css/style.css'/>
          </head>
          <body>
            <div id='container' dangerouslySetInnerHTML={{__html: contentHtml}}/>
            <script type='text/javascript' src='/js/react.js'/>
            <script type='text/javascript' src='/js/react-dom.js'/>
            {propStore}
            <script type='text/javascript' src={script}/>
            <script type='text/javascript' src='/js/jquery.min.js'/>
            <script type='text/javascript' src='/js/bootstrap.min.js'/>
            <script type='text/javascript' src='/js/googleStatistic.js'/>
          </body>
        </html>
      );
    }else{
      return (
        <div>{this.props.children}</div>
      );
    }
  }
}
