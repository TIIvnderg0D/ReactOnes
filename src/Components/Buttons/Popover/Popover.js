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

const PopButton = () => (
    <button
        id='popOver'
    >
        Click me to see
    </button>
);

const toggleHover = () => {
    const popWindow = document.querySelector('.popWindow')
    popWindow.hidden = !popWindow.hidden;
}

const withPopover = (WrappedComponent, PopWindowData) => {

    class PopWindow extends Component {

        render() {
            return (
                <div className='wrapper'
                    onMouseOver={toggleHover}
                    onMouseOut={toggleHover}>
                    <WrappedComponent {...this.props} />
                    <PopWindowData />
                </div>)
        }
    }

    return PopWindow;
}

const Popover = withPopover(PopButton, PopContent);

export default Popover;
