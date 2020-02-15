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

    renderButtons = ({items, active}) => { 
        return (
        items.map((button) => {
            let title = button.title;
            return (
            <button
                key={title}
                className={active === title ? 'active' : ''}
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
                    <this.renderButtons items={this.props.items} active={active}/>
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

    renderButtons = ({items, itemList}) => { 
        return (
        items.map((button) => {
            let title = button.title;
            return (
            <button
                key={title}
                className={itemList.includes(title) ? 'active' : ''}
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
        const itemList = this.state.itemList;
        return (
            <div className='wrapper'>
                <h1>Multiple</h1>
                <div className='buttons'>
                <this.renderButtons items={this.props.items} itemList={itemList}/>
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


