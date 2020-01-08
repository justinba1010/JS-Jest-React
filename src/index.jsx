import React from 'react';
import ReactDOM from 'react-dom';
const title = 'React with Webpack and Babel';

let App = document.getElementById('app')

ReactDOM.render(
  <div>{title}</div>,
  App);
module.hot.accept();
