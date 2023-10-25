import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import heck from './assets/hecker.jpg'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  < React.StrictMode >
    <App />
    {/* <div className='heck'>
      <h1>Hello World!</h1>
      <img src={heck} alt="" />
    </ div> */}
  </React.StrictMode >
);

