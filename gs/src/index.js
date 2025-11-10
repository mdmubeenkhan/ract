import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import iImage from './i.jpg';
import iImage2 from './i2.jpg';

import "./index.css";
import Item from './components/Item';
import InputForm from './components/InputForm';

const RootComponent = () => {
  // store all submitted items
  const [items, setItems] = useState([]);

  const formInputData = (formInputDataEnteredByUser) => {
    console.log("form input data in index.js =", formInputDataEnteredByUser);

    // add new item to array without mutating state
    setItems((prevItems) => [...prevItems, formInputDataEnteredByUser]);
  };

  return (
    <React.StrictMode>
      <App />
      <InputForm onSubmitInput={formInputData} />

      {/* render all items dynamically */}
      {items.map((item, index) => (
        <Item
          key={index}
          imageSrc={index % 2 === 0 ? iImage : iImage2} // alternate images for fun
          title={`User ${index + 1}`}
          rating="⭐️⭐️⭐️⭐️"
          name={item.name}
          email={item.email}
        />
      ))}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
