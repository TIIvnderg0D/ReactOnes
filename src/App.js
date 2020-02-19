import React from 'react';
import './App.css';
import {ITEMS} from './Components/Buttons/items.js';
import {Buttons, Status} from './Components/Buttons/index.js'

function App() {
  return (
    <div className="App">
      <Buttons items={ITEMS}/>
    </div>
  );
}

export default App;
