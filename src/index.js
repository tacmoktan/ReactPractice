
//creating a react component
/*import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component{
    render() {
       return <h1>Hello world</h1>;
    }
}
ReactDOM.render(<MyComponentClass/>,document.getElementById('root'));
*/
//passing variable attribute in a component
/*
import React from 'react';
import ReactDOM from 'react-dom';

const food = {
    veg: "maasu",
    nonVeg: "paneer"
}

class FoodPasal extends React.Component{
    render(){
        return (
            <div>
                <h3>{food.veg} for vegeterians</h3>
                <h3>{food.nonVeg} for non-vegeterians</h3>
            </div>
        );
    }
}
ReactDOM.render(<FoodPasal/>,document.getElementById('root'));
*/

//Logic, Conditionals, Event Listener
import React from 'react';
import ReactDOM from 'react-dom';

class AttendenceBook extends React.Component{

    studentStatus(e){ //eventlistener
        alert(`you clicked on ${e.target.textContent}`);
    }
    render() {
        const students = [
                        {
                            name:'ram',
                            attendence: null
                        },{
                            name:'sam',
                            attendence:null
                        },{
                            name:'takle',
                            attendence:null}];
        
        students.forEach(student => {
            const present = Math.random() < 0.5; //returns either true or false randomly
            present? student.attendence = "present" : student.attendence ="absent"; //xonditionals
        });
        
        console.log(students);
        const studentsPresent = students.filter( student => student.attendence === "present" );
        console.log(studentsPresent);
        const listStudents= students.map(student => <li onClick={this.studentStatus}>{student.name}</li>);
        return (
            <div>

                <ul>
                    {listStudents}
                </ul>
            </div>
        );
    }

}
ReactDOM.render(<AttendenceBook/>,document.getElementById('root'));
//
/*
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
*/