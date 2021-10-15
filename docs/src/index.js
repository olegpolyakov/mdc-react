import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';

import App from './App';

import './index.scss';

const basename = process.env.ENV.production ? 'mdc-react' : undefined;

render(
    <Router basename={basename}>
        <App />
    </Router>,
    document.querySelector('#root')
);