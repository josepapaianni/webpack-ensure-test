const React = require('react');
const ReactDom = require('react-dom');

require.ensure([], function(require){
  const t = require('./test');
  console.log(React, ReactDom, t);
});

