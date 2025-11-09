import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import iImage from './i.jpg';
import iImage2 from './i2.jpg';

import "./index.css"
import Item from './components/Item';
import InputForm from './components/InputForm';

let name = "mubeen"
let email = "mubbeen@gmail.com"

const root = ReactDOM.createRoot(document.getElementById('root'));

// input form data

root.render(
  <React.StrictMode>
    <App />
    <InputForm />
    <Item imageSrc={iImage} title={"oldflower"} rating={"⭐️⭐️⭐️⭐️"} name={name} email={email} />
    <Item imageSrc={iImage2} title={"flower"} rating={"⭐️⭐️⭐️⭐️"} name={name} email={email}/>
  </React.StrictMode>
);

