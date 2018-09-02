import React from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('app');

const ShowFrameworks = (props) => {
	
	return <h1>hello world</h1>
}

let list = ['a','b','c'];


ReactDOM.render(<ShowFrameworks list={list} />, mountNode);



