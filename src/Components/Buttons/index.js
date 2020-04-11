import React from 'react'
import './index.css' 
import {Single} from './Single/Single.js'
import {Multiple} from './Multiple/Multiple.js'
import {Popover} from './Popover/Popover.js'

export function Buttons({items}) {
    return (
      <div>
        <Single items={items}/>
        <Multiple items={items}/>
        <Popover/>
      </div>
    );
  }
