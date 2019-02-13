//# Mounting lifecycle

import React from 'react';
import ReactDOM from 'react-dom';

class ComponentClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:""};
    }
    
    componentWillMount(){  //called before render()
        alert('time to change state');
        this.setState({value:"will mount"});
    }

    componentDidMount(){ //called after render()
        alert('already changed state');
        this.setState({value:"did mount"});
    }

    render() {
        return <h1>{this.state.value}</h1>;
    }
}

ReactDOM.render(<ComponentClass />, document.querySelector('#root'));

/*
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
*/