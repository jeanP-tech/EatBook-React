import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'fast-text-encoding/text';
import 'core-js';
import 'core-js/es/map';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
