import React, { Component } from 'react'

export class Single extends Component {

    state = {
        activeButton: ''
    }

    toggleClick = (title) => {
        this.setState({ activeButton: title })
    }

    renderButtons = (items, activeButton) => {
        return (
            items.map(({ title }) => {
                return (
                    <button
                        key={title}
                        className={activeButton === title ? 'active' : ''}
                        onClick={() => this.toggleClick(title)}
                        title={title}
                    >
                        {title}
                    </button>
                )
            })
        )
    }

    render() {
        const { activeButton } = this.state;
        const { items } = this.props;
        return (
            <div className='wrapper'>
                <h1>Single</h1>
                <div className='buttons'>
                    {this.renderButtons(items, activeButton)}
                </div>
                <div className="status">
                    {activeButton !== 0 ? `Selected: ${activeButton}` : ''}
                </div>
            </div>
        )
    }
}
