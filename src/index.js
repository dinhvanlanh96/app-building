import React from 'react';
import ReactDOM from 'react-dom';
import App from './Componets/App/App';
import * as serviceWorker from './service/serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
