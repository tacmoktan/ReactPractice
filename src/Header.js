import React from 'react';
import {color} from './colors.js';

export class Header extends React.Component{
    

    render(){
        const colorHeader = { color:color.green};

        return (
            <h1 style={colorHeader}> This is header component</h1>
        );
    }
};