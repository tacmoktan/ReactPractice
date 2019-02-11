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
/* import React from 'react';
export const Food = (props) => {
    return (
        <div>
            <h1>{props.foodName} </h1>
            <h3>is {props.foodType} </h3>
            <button onClick={props.onClick}> change {props.foodType} </button>
        </div>
    );
} */

//# propTypes (validating props according to their types)
import React from 'react';
import PropTypes from 'prop-types';

/* export class Food extends React.Component{
    render(){
        return(
            <div>
                <h1>Food</h1>
                <h4>Type: {this.props.foodType}</h4>
                <h4>Quantity: {this.props.quantity}</h4>
                <h4>Amount: {this.props.amount}</h4>
            </div>
        );
    }
} */
//with stateless functional component
export const Food = (props) => {
     return (
        <div>
            <h1>Food (stateless functional component) </h1>
            <h4>Type: {props.foodType}</h4>
            <h4>Quantity: {props.quantity}</h4>
            <h4>Amount: {props.amount}</h4>
        </div>
     );
 }

//check console for any error message
Food.propTypes = {
    foodType: PropTypes.string,  
    quantity: PropTypes.number,
    amount: PropTypes.number
};