import React from 'react';
import ReactDOM from 'react-dom';
import stores from './stores';
import App from './components/App';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';

const root = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);

useStrict(true);

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
