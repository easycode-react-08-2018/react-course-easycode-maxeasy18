import React from 'react';
import { Link } from "react-router-dom";

import logo from './../logo.svg';

export class Header extends React.Component {
	render(){
		return (
			<header className="container"> 
				<div className="user-login">
					<div>User Login</div>
				</div>		
				<div className="sign-out">
					<button>Sign Out</button>
				</div>										
				<div className="sign-in">
          <Link to="/signin">Sign In</Link>
					<Link to="/recipes">recipes</Link>
				</div>
				<div className="logo">
					<img src={logo} className="App-logo" alt="logo" />
				</div>
			</header>
		)
	}
}