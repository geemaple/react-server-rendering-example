'use strict';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import safeJsonStringify from 'safe-json-stringify';

export default class Layout extends React.Component{
  render(){
    if (typeof window == 'undefined') {//server rendering
      var contentHtml = ReactDOMServer.renderToString(<div>{this.props.children}</div>);
      var {settings, _locals, cache, children, propLink, propScript, ...parameters } = this.props;

      var cssStore;
      if (typeof propLink != 'undefined' && propLink.length > 0) {
        cssStore = propLink.map(function(linItem){
          return <link {...linItem}/>
        });
      }

      var json = safeJsonStringify(parameters);
      var propStore = <script type='application/json'
          id={'parameters'}
          dangerouslySetInnerHTML={{__html: json}}>
      </script>;

      var scriptStore;
      if (typeof propScript != 'undefined' && propScript.length > 0) {
        scriptStore = propScript.map(function(scriptItem){
          return <script {...scriptItem}/>
        });
      }

      return (
        <html>
          <head>
            <title>{this.props.title}</title>
            <link rel='stylesheet' href='/css/bootstrap.min.css'/>
            {cssStore}
          </head>
          <body>
            <div id='container' dangerouslySetInnerHTML={{__html: contentHtml}}/>
            <script type='text/javascript' src='/js/react.min.js'/>
            <script type='text/javascript' src='/js/react-dom.min.js'/>
            {propStore}
            {scriptStore}
            <script type='text/javascript' src='/js/jquery.min.js'/>
            <script type='text/javascript' src='/js/bootstrap.min.js'/>
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
