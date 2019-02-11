import React from 'react';

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
}