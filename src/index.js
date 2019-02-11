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
import React from 'react';
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
ReactDOM.render(<ComponentClass/>,document.getElementById('root'));




/*
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
*/