import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Card from '../components/Card'; 
//instead of App we change to our component that we will build
// import CardList from "./CardList.js" , after we built this its better now to create one big component named App.
import App from "./containers/App"
import reportWebVitals from './reportWebVitals';
import "tachyons";
// import { robots } from './robots'; //since the export is not default we have to destructure it and therefore the brackets

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
      <App/>
  </React.StrictMode>
);


//we can give direct properties to the Hello object, like greeting etc so i can use them in Hello.js
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
