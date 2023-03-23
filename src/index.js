import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

let a = {
  aa: 1,
  bb: 2
}
let b = {
  aa: 1,
  bb: 2
};

console.log(a == b);

let z = 1;
let y = 1;

console.log(z === y)