//Event listener JSX element
/*
import React from 'react';
import ReactDOM from 'react-dom';


function imageDisplay(e){
    e.target.setAttribute('src',"img/2.png");
}

let pic = (<img src="img/1.jpg" alt="bookstore" height="100px" width="100px" onClick={imageDisplay} />);

ReactDOM.render(pic,document.getElementById('root'));
*/
/*
//terniary and && conditionals and key attributes
import React from 'react';
import ReactDOM from 'react-dom';

let food =["bhaat","daal","tarkari","maasu","paneer"];

let vegList = food.map( item => {
    let temp;
(item !=="maasu") && (temp = <li> {item} </li>); //&& conditionals
    return temp;
} );
let nonVegList = food.map( item => {
    let temp; //terniary conditionals
    item!=="paneer" ? temp = <li> {item} </li>: console.log(`item excluded: ${item}`); 
    return temp;
});

let veg = (<div>
    <h3>Veg</h3> <ul>{vegList}</ul>
    </div>);
let nonVeg = (<div>
    <h3>nonVeg</h3> <ul>{nonVegList}</ul>
    </div>);

//key attributes in <li> of JSX element, should be assigned along with li tag.
let foodList = food.map((item,i) => <li key={"food"+i}>{item}</li>);

console.log(foodList);
ReactDOM.render(veg,document.getElementById('root'));
ReactDOM.render(nonVeg,document.getElementById('root2'));
*/
//React.createElement
import React from 'react';
import ReactDOM from 'react-dom';

const title = <h1>React Element</h1>;
const titleReact = React.createElement(
    "h1",
    null,
    "React Element"
);
title===titleReact ? console.log("title = titleReact"): console.log('title!=titleReact');
console.log(titleReact,title); //they're not same check the "self" property at console
ReactDOM.render(titleReact,document.getElementById('root'));

//import registerServiceWorker from './registerServiceWorker';
//registerServiceWorker();