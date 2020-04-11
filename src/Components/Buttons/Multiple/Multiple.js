import React, { Component } from 'react'

export class Multiple extends Component {

    state = {
        itemList: []
    }

    toggleClick = (title) => {
        const targetName = title;
        let { itemList } = this.state;

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

    renderButtons = ({ items, itemList }) => {
        return (
            items.map(({title}) => {
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
        const { itemList } = this.state;
        return (
            <div className='wrapper'>
                <h1>Multiple</h1>
                <div className='buttons'>
                    <this.renderButtons items={this.props.items} itemList={itemList} />
                </div>
                <div className="status">
                    {itemList !== 0 ? `Selected: ${itemList}` : ''}
                </div>
            </div>
        )
    }
}
