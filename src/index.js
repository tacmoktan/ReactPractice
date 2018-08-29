//testing React
/* import React from 'react';
import ReactDOM from 'react-dom';

class Componenttemp extends React.Component {
    render() {
    return (<h1>Stateless and stateful component</h1>);
    }
}
ReactDOM.render(<Componenttemp/>, document.getElementById('root'));
 */

//#1 Stateless Components from Stateful Components
//stateful component
/* import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './child';

class Parent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name:'Shaktimaan'};
    }
    render() {
        return <Child name={this.state.name}/>
    }
}
ReactDOM.render(<Parent/>,document.getElementById('root'));
 */

 //#2updating states from child component(stateless component)
/* import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './child';
class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state={name:'Shaktimaan'};
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({name:'Gangadhar'});
    }
    render() {
    return (<Child name={this.state.name} onClick={this.handleClick}/>);
    }
}
ReactDOM.render(<Parent/>,document.getElementById('root'));
 */

//#3 defining EventHandler To update state of parent from child
//passing Eventhandler as props line 70 
/* import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './child';

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state={name:'Ram'};
        this.nameChange = this.nameChange.bind(this);
    } 
    nameChange(newName1) {
        this.setState({name:newName1});
    }
    render() {
        return (
            <div>
                <Child name={this.state.name} onChange={this.nameChange} /> 
            </div>
        );
    }
}
ReactDOM.render(<Parent/>,document.getElementById('root'));
 */
//#4 Updating props of siblings
//Child Updates state of parent and that state is sent as props to sibling component
//basically divides work to two components, child does the eventhandling or any logical operation, sibling does the rendering(displaying)
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './child';
import { Sibling } from './sibling';

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state={mood:'Happy'};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(feeling) {
        this.setState({mood:feeling});
    }
    render(){
        return (
            <div>
                <Child onClick={this.handleClick} /> 
                <Sibling mood={this.state.mood}/>
            </div>
        );
    }
}
ReactDOM.render(<Parent/>,document.getElementById('root'));
 /*
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
*/  