import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "tachyons";
// import App from "./stage2/App";
import * as serviceWorker from './serviceWorker';
// import Stage2 from "./stage2/Stage2";
import GreenBead from "./stage2/components/GreenBead";
import ProgressBar from "./stage2/containers/ProgressBar";

ReactDOM.render(
  <React.StrictMode>
    <ProgressBar numberOfBeads={5} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
