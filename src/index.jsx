import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style/styles.scss';

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);
ReactDOM.render(<App />, root);
