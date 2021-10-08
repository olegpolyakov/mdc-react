import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';

import App from './App';

import './index.scss';

render(
    <Router>
        <App />
    </Router>,
    document.querySelector('#root')
);