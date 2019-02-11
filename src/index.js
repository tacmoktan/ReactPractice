//Styles

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

//Separate Container Components(FoodsContainer) from Presentational Components  (Food)

//container component
import React from 'react';
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
ReactDOM.render(<FoodsContainer />,document.querySelector('#root'));
/*
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
*/