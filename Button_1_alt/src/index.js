import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css' 

class DisplayStatus extends Component {
    render() {
        return (
            (<div className="status">
                Active one is:
            {this.props.activeOne.active === 0 ? `` : ` ${this.props.activeOne.title}`}
            </div>)
        )
    }
}

class App extends Component {

    state = {
        title: ''
    }

    toggleClick = (e) => {
        this.setState({
            title: e.target.getAttribute('title')
        })
    }

    render() {
        const active = this.state.title;
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
                <DisplayStatus activeOne={this.state}/>
            </div>
        )
    }
}

const ITEMS = [
    {
        dataNumber: 1,
        title: 'Apartment'
    },
    {
        dataNumber: 2,
        title: 'House'
    },
    {
        dataNumber: 3,
        title: 'Studio'
    },
] 

ReactDOM.render(<App items={ITEMS}/>, document.getElementById('root'))
