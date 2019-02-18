//# Mounting lifecycle

/* import React from 'react';
import ReactDOM from 'react-dom';

class ComponentClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:"state1"};
    }
    
    componentWillMount(){  //called before render()
        alert('time to change state');
        this.setState({value:"will mount"});
        console.log(this.state.value);
    }

    render() {
        return <h1>{this.state.value}</h1>;
    }

    componentDidMount(){ //called after render()
        alert('already changed state');
        this.setState({value:"did mount"});
        console.log(this.state.value);
    }
}

ReactDOM.render(<ComponentClass />, document.querySelector('#root')); */

//# Updating Lifecyle

import React from 'react';
import ReactDOM from 'react-dom';

class ComponentClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:"state 1"};
    }

    componentWillReceiveProps(nextProps) {
        alert(`this is nextProps value: ${nextProps.value}`);
    }

    shouldComponentUpdate(nextProps, nextState) { //if no change, then doesn't call rest of other lifecycle methods 
        if( nextProps.value === this.props.value && nextState === this.state.value){
            alert('props and state has\'nt changed. Cant update');
            return false;
        }else{   
            alert('component can be updated');
            return true;
        }
    }

    componentWillUpdate(nextProps,nextState) {
        alert('its about to update');
        console.log("props: "+nextProps.value+" state:"+nextState.value);
    }

    render(){
        return (
            <div>
                <h1> Props: {this.props.value} </h1>
                <h1> State: {this.state.value} </h1>
            </div>);
    }

    componentDidUpdate(prevProps,prevState) {
        alert('its already updated');
        console.log("props:"+prevProps.value+" state:"+prevState.value);
    }
}

ReactDOM.render(<ComponentClass value="props incoming" />,document.querySelector('#root'));

setTimeout(() => ReactDOM.render(<ComponentClass value="props incoming on 2nd render"/>,document.querySelector('#root')),3000);
/*
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
*/