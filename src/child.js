/*//#1 
import React from 'react';

export class Child extends React.Component{
    render() {
        return <h3>My name is {this.props.name}</h3>;
    }
} */

//#2
/* import React from 'react';
export class Child extends React.Component{
    render() {
        return (
            <div>
            <p>My name is {this.props.name}</p>
            <button type="button" onClick={this.props.onClick}>Change Name</button>
            </div>
        );
    }
}  */

//#3 Receiving Event Handler line33
/* 
import React from 'react';

export class Child extends React.Component{
    constructor(props){
        super(props);
        this.handleChange= this.handleChange.bind(this);
    }
    handleChange(e) {
        let newName = e.target.value;
        this.props.onChange(newName);
    }
    render() {
        return(<div>
            <p>My name is {this.props.name}</p>
        <select onChange={this.handleChange}>
            <option value="Ram">Ram</option>
            <option value="Sam">Sam</option>
            <option value="Mam">Mam</option>
        </select>
        </div>
        );
    }
}  */

//#4 updating props of siblings from child

import React from 'react';

export class Child extends React.Component{
    constructor(props){
        super(props);
        this.changeMood= this.changeMood.bind(this);
    }
    changeMood(e) {
        let feeling = e.target.value;
        this.props.onClick(feeling);
    }
    render(){
        return(<div>
            <select onChange={this.changeMood}>
            <option value="Happy">Happy</option>
            <option value="Sleepy">Sleepy</option>
            <option value="Hungry">Hungry</option>
            <option value="Stupid">Stupid</option>
            </select>
                </div>);
    }
}