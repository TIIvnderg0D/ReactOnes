import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PopContent() {
    return (
        <div className='popWindow' hidden>
            <p className='popWindow__header'>
                <FontAwesomeIcon className='caret fake' icon='caret-left' color='lightgrey' />
                <FontAwesomeIcon className='caret' icon='caret-left' color='white' />
                Popover right
            </p>
            <p> And here's some <strong>amazing</strong> content. It's very engaging. Right?</p>
        </div>
    )
}

const PopButton = (props) => {
    return (
        <button
            id='popOver'
            onClick={props.toggleClick}
        >
            Click me to see
        </button>
    )
}


const PopOvered = (WrappedComponent, PopWindowData) => {
    
    class PopWindow extends Component {
        toggleClick = () => {
            const popWindow = document.querySelector('.popWindow')
            popWindow.hidden = !popWindow.hidden;
        }

        render() {
            return (
                <div className='wrapper'>
                    <WrappedComponent toggleClick={this.toggleClick} />
                    <PopWindowData />
                </div>)
        }
    }

    return PopWindow;
}

const Popover = PopOvered(PopButton, PopContent);

export default Popover;
