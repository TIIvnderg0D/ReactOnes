import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
    };

    onStateChange() {
        this.setState({isActive: !this.state.isActive});
        this.props.getState(this.props.value);
    }

    render() {
        if (this.state.isActive) {
           return ( 
            <li
                className="active"
                onClick={() => this.onStateChange()}>
                {this.props.value}
            </li>
            )  
        } else {
        return (
            <li
                onClick={() => this.onStateChange()}>
                {this.props.value}
            </li>
        );
        }
    }
}

class ButtonList extends Component {
    render() {
        const objectList = [];
        this.props.items.forEach((button, index) => {
            objectList.push( 
            <Button
                key={index}
                value={button.title}
                getState={this.props.getState}
            />
            );
        });
        return (
            <ul className="buttons">{objectList}</ul>
        )
    }
}

class Status extends Component {
    render() {
        return (
            <div className="status">
            <p> Selected Value: </p>
            <p>{this.props.item}</p>
            </div>
        )
    }
}

class App extends Component {

    state = {
        activeOne: ''
    }

    getState = (title)  => {
        this.setState({activeOne: title});
    }

    render() {
        return (
            <div className="wrapper">
                <h1>Single</h1>
                <ButtonList    
                    items={this.props.items}  
                    getState={this.getState}    
                />
                <Status item={this.state.activeOne}/>
            </div>
        )
    }
}

const ITEMS = [
    {
        name: 'First one',
        title: 'Apartment'
    },
    {
        name: 'Second one',
        title: 'House'
    },
    {
        name: 'Third one',
        title: 'Studio'
    },
] 

ReactDOM.render(<App items={ITEMS}/>, document.getElementById('root'))
