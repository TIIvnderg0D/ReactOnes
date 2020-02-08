import React from 'react';
import './App.css';
import {Single, Multiple} from './Components/Buttons/index.js';
import {ITEMS} from './Components/Buttons/items.js';

function App() {
  return (
    <div className="App">
      <Single items={ITEMS}/>
      <Multiple items={ITEMS}/>
    </div>
  );
}

export default App;
