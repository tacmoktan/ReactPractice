//<MyComponentClass foo = "bar" />
//<MyComponentClass foo = {bar} /> incase bar is not a string
/* //#1 passing props inbetween components
import React from 'react';
import ReactDOM from 'react-dom';

import {Grades} from './helper';

class Student extends React.Component{
    render() {
        const students = ['ram','sam','kaput'];
        const listStudents = students.map(student => <li>{student}</li>)
        return (
            <div>
            <Grades title={this.props.gradeTitle}/>
            <h3>These are the {this.props.studentTitle}</h3>
            <ul>{listStudents}</ul>
            </div>
        )   
    }
};
ReactDOM.render(<Student studentTitle="Students" gradeTitle="Grades" />,document.getElementById('root'));
*/

//#2 Deciding on the basis of props whether or not to render something
/*
import React from 'react';
import ReactDOM from 'react-dom';

import {CollegeStatus} from './helper';

class CollegeNotice extends React.Component{
    render() {
        return (
            <div>
                <h2>Holiday Notice!!</h2>
                <CollegeStatus holiday={true} checker={this.props.checker}/>
            </div>
        );
    }
};
ReactDOM.render(<CollegeNotice checker="Tasi"/>,document.getElementById('root'));
*/

//#3 put event handler(function) in component, pass eventhandler as props, 
/*
import React from 'react';
import ReactDOM from 'react-dom';

import Button from './helper';
class EventComponent extends React.Component{
    handleClick() { //event handler
        alert('sorry shaktimaan');
    }
    render() {
        return(
                <Button onClick={this.handleClick}/> //passes function as props for Button component
        );
    }
}

ReactDOM.render(<EventComponent />,document.getElementById('root'));
*/
//#4  this.props.children , .defaultProps
/*
import React from 'react';
import ReactDOM from 'react-dom';

import {List} from './helper';
class Students extends React.Component{
    render(){
        return (
            <div> 
                <List section={this.props.section}>
                    <li>Ram</li>
                    <li>Sam</li>
                </List>
            </div>
        );

    }
}
//Students.defaultProps = {section:"Badar student"};  //uncomment to use defaultProps, also remove the props of componentInstance below
ReactDOM.render(<Students section="CSIT student"/>,document.getElementById('root'));
*/
//#5 this.state, this.setState(), bind(this)
import React from 'react';
import ReactDOM from 'react-dom';

class Component1 extends React.Component {
    constructor(props){
        super(props); //inheritance property
        this.state = {states:"ice"};
        this.makeWater = this.makeWater.bind(this);
    }

    makeWater() {
        const form = this.state.states ==="ice"? "water":"ice" ;
        this.setState({states:form});
    }

    render(){
        return (
        <div>
            <p>Form of water: {this.state.states}</p>
            <button onClick={this.makeWater}>ChangeState</button>
        </div>);
    }
}
ReactDOM.render(<Component1/>,document.getElementById('root'));

/*
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
*/