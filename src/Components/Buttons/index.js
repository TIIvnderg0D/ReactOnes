import React, {Component} from 'react'
import './index.css' 

export class Single extends Component {

    state = {
        activeButton: ''
    }

    toggleClick = (title) => {
        this.setState({
            activeButton: title
        })
    }

    renderButtons = ({items}) => { 
        return (
        items.map((button) => {
            let title = button.title;
            return (
            <button
                key={title}
                //className={active === title ? 'active' : ''}
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
        const active = this.state.activeButton;
        return (
            <div className='wrapper'>
                <h1>Single</h1>
                <div className='buttons'>
                    <this.renderButtons items={this.props.items} />
                </div>
                <Status status={this.state.activeButton}/>
            </div>
        )
    }
}

export class Multiple extends Component {

    state = {
        itemList: []
    }

    toggleClick = (title) => {
        const targetName = title;
        let itemList = this.state.itemList;

            this.setState(state => {
            if (!itemList.includes(targetName)) {
                itemList = state.itemList.concat(targetName);
            } else {
               let newList = itemList.filter((currentItem) => {
                    return currentItem !== targetName
                })
                return {
                    itemList: newList,
                }
            }
            return {
                itemList,
            }
            })
    }

    renderButtons = ({items}) => { 
        return (
        items.map((button) => {
            let title = button.title;
            return (
            <button
                key={title}
                //className={activeList.includes(button.title) ? 'active' : ''}
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
        return (
            <div className='wrapper'>
                <h1>Multiple</h1>
                <div className='buttons'>
                <this.renderButtons items={this.props.items} />
                </div>
                <Status status={this.state.itemList}/>
            </div>
        )
    }
}

    function Status(props) {
        let status = props;
        return (
            <div className="status">
                {status !== 0 ? `Selected: ${props.status}` : ''}
            </div>
        );
    }


