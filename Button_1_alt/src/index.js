import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css' 

class Single extends Component {

    state = {
        activeOne: ''
    }

    toggleClick = (e) => {
        this.setState({
            activeOne: e.target.getAttribute('title')
        })
    }

    render() {
        const active = this.state.activeOne;
        return (
            <div className='wrapper'>
                <h1>Single</h1>
                <div className='buttons'>
                    {ITEMS.map((button, index) => (
                        <button
                            key={index}
                            className={active === button.title ? 'active' : ''}
                            onClick={this.toggleClick}
                            title={button.title}
                        >{button.title}</button>
                    ))} 
                </div>
                <DisplayStatus passingProp={this.state.activeOne}/>
            </div>
        )
    }
}

class Multiple extends Component {

    state = {
        activeOne: '',
        itemList: []
    }

    toggleClick = (e) => {
        const targetName = e.target.getAttribute('title');
        let itemList = this.state.itemList;
            this.setState(state => {
            if (!itemList.includes(' ' + targetName)) {
                itemList = state.itemList.concat(' ' + targetName);
            }
                return {
                    activeOne: targetName,
                    itemList,
                }
            })
    }

    render() {
        const itemList = this.state.itemList;
        return (
            <div className='wrapper'>
                <h1>Multiple</h1>
                <div className='buttons'>
                    {ITEMS.map((button, index) => (
                        <button
                            key={index}
                            className={itemList.includes(' ' + button.title) ? 'active' : ''}
                            onClick={this.toggleClick}
                            title={button.title}
                        >{button.title}</button>
                    ))} 
                </div>
                <DisplayStatus passingProp={this.state.itemList}/>
            </div>
        )
    }
}

class DisplayStatus extends Component {
    render() {
        let passedProp = this.props.passingProp;
        return (
            <div className="status">
                {typeof passedProp === 'string' ? `Selected Value:` : `Selected Values:`} 
                {passedProp === 0 ? `` : ` ${this.props.passingProp}`}
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Single items={ITEMS}/>
                <Multiple items={ITEMS}/>
            </div>
        )
    }
}

const ITEMS = [
    {
        title: 'Apartment'
    },
    {
        title: 'House'
    },
    {
        title: 'Studio'
    },
] 

ReactDOM.render(<App/>, document.getElementById('root'))
