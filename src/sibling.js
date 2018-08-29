import React from 'react';

export class Sibling extends React.Component {
    render(){
        return(
            <h2>Sometimes you might be feeling {this.props.mood}</h2>
        );
    }
}