import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './HomePage/App';
import Background from './images/126.jpg';


ReactDOM.render(
  <React.StrictMode>
    <div className="container-fluid" id="mainPage" style={{backgroundImage: `url(${Background})`}} >
       <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
