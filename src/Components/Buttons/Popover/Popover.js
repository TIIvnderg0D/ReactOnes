import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Popover extends Component {

    toggleClick = () => {
        const popWindow = document.querySelector('.popWindow')
        popWindow.classList.toggle('visible')
    }

    render() {
        return (
            <div className='wrapper'>
                <button
                    id='popOver'
                    onClick={() => this.toggleClick()}
                >
                    Click me to see
                </button>
                <div className='popWindow'>
                    <p className='popWindow__header'>
                        <FontAwesomeIcon className='caret fake' icon='caret-left' color='lightgrey' />
                        <FontAwesomeIcon className='caret' icon='caret-left' color='white' />
                        Popover right
                    </p>
                    <p>And here's some <strong>amazing</strong> content. It's very engaging. Right?</p>
                </div>
            </div>
        )
    }

}
