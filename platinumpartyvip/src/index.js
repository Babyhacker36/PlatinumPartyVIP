import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';

// root element
const rootEl =  document.getElementById('root');

let render = () => {
    ReactDOM.render(<App />, rootEl)

}


// Module replacement to allow live editing

if(module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render)
    })
}


render();

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
