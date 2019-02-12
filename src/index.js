//# Styles

//#1 inlineStyle
/* import React from 'react';
import ReactDOM from 'react-dom';

const styles= <h1 style={{color:'green',background:'darkred'}}>Yo what up</h1>;
ReactDOM.render(styles,document.getElementById('root'));  */

//#2 use variable object for styles 
/* 
import React from 'react';
import ReactDOM from 'react-dom';

const divStyle = {
    color:'red',
    background:'green',
    fontFamily:'Lucida',
    fontSize:"1em"
}
class Style extends React.Component{
    render() {
        return (<div style={divStyle}>Done by Style Object Variable</div>);
    }
}
ReactDOM.render(<Style/>,document.getElementById('root')); */

//#3 name syntax <div (stylename)=(stylevalue)> </div> //camelCase
//#4 value syntax   //every value in strings except for px (which is in number)

//#5 import styles from another file
/* import React from 'react';
import ReactDOM from 'react-dom';

import { color } from './colors';
import { Header } from './Header.js';

const divStyle= {
    background: color.red,
    color: color.white
}

class ComponentClass extends React.Component{
    render() {
        return (
            <div>
                <Header />
                <div style={divStyle}>component</div>
            </div>
        );
    }
}
ReactDOM.render(<ComponentClass/>,document.getElementById('root')); */

//# Separate Container Components(FoodsContainer) from Presentational Components  (Food)

//container component    
/* import React from 'react';
import ReactDOM from 'react-dom';

import {Food} from './food';

const foods = {cooked:'rice',uncooked:'ice-cream'};

class FoodsContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {food:"cooked"};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let foodState = this.state.food === 'cooked' ? 'uncooked' : 'cooked';
        this.setState({food:foodState});
    }

    render() {
        return <Food foodType={this.state.food} foodName = {foods[this.state.food]} onClick={this.handleClick} />;
    }
}
ReactDOM.render(<FoodsContainer />,document.querySelector('#root')); */

//# Stateless functional component (uncomment above component & check in food.js)

//# propTypes
/* import React from 'react';
import ReactDOM from 'react-dom';
import {Food} from './food.js';
class OrderFood extends React.Component{
    render(){
        return <Food foodType='momo' quantity={2} amount={200} />
    }
}

ReactDOM.render(<OrderFood/>,document.querySelector('#root')); */


//# React Forms  (controlled Component)
import React from 'react';
import ReactDOM from 'react-dom';

class ReactForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {firstName:"",comment:""};
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);

        this.handleSubmit =  this.handleSubmit.bind(this);
    }

    handleFirstNameChange(e) {
        this.setState({firstName:e.target.value});
    }
    handleCommentChange(e) {
        this.setState({comment:e.target.value});
    }

    handleSubmit(){
        alert(`firstName:${this.state.firstName} comment:${this.state.comment}`);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    First Name:
                    <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                    {this.state.firstName}
                </div>
                <div>
                    Comment
                    <textarea value={this.state.comment} onChange={this.handleCommentChange}> </textarea>
                    {this.state.comment}
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}
ReactDOM.render(<ReactForm />,document.querySelector('#root'));
/*
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
*/