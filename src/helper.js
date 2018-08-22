/* //#1
import React from 'react';

export class Grades extends React.Component{
    render() {
        const grades = ['A+','A','B+','B'];
        const listGrades = grades.map(grade => <li>{grade}</li>)
        return (
            <div>
                <h3>These are the {this.props.title}</h3>
                <ul>{listGrades}</ul>
            </div>
        )
    }
};*/
//#2
/*
import React from 'react';

export class CollegeStatus extends React.Component{
    render() {
        const holiday = this.props.holiday ?  `It's holiday ${this.props.checker}!!`: `It's not holiday ${this.props.checker}!!`
        return (
            <div>
                {holiday}       
            </div>
        );
    }
}
*/

//#3
/*
import React from 'react';

class Button extends React.Component{
    render() {
        return (<button onClick ={this.props.onClick}>Click</button> //receives eventHandler(function) as props
        );
    }
}
export default Button;
*/

//#4
/*
import React from 'react';

export class List extends React.Component{
    
    render() {
        let title;
        if(this.props.children instanceof Array)
           title = this.props.section + "s";
        else
           title = this.props.section;
        return (
            <div>
            <h2>{title}</h2>
            {this.props.children}
            </div>
        );
    }
}*/

