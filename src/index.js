import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const render = Component => {
  ReactDOM.render(Component(), document.getElementById('root'));
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    console.log('Accepting the updated App component!');
    let NewApp = require('./App').default
    render(NewApp)
  })
}
