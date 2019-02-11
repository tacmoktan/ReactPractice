//# Separate Container component from Presentational component
//presentational component

/* import React from 'react';

export class Food extends React.Component{
    render() {
        return (
            <div>
                <h1>{this.props.foodName}</h1>
                <h3>is {this.props.foodType}</h3>
                <button onClick={this.props.onClick}>change {this.props.foodType} </button>
            </div>
        );
    }
} */

//# stateless functional Component     (rewriting above code in stateless functional Component)
import React from 'react';
export const Food = (props) => {
    return (
        <div>
            <h1>{props.foodName} </h1>
            <h3>is {props.foodType} </h3>
            <button onClick={props.onClick}> change {props.foodType} </button>
        </div>
    );
}