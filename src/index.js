
import React from 'react';
import ReactDOM from 'react-dom';

class Master extends React.Component{
   
    render() {
        console.log('this is master');
        console.log('just some extra text');
        return (
        <div><h2>Welcome to Master branch</h2>
        <h4>Checkout other branches</h4>
        </div>
        );
    }
}
ReactDOM.render(<Master/>,document.getElementById('root'));
/*
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
*/