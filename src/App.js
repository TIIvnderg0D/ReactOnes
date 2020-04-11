import React from 'react';
import './App.css';
import {ITEMS} from './Components/Buttons/items.js';
import {Buttons} from './Components/Buttons/index.js'
import { library } from './fontawesome.js'

function App() {
  return (
    <div className="App">
      <Buttons items={ITEMS}/>
    </div>
  );
}

export default App;
