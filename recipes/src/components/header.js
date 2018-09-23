import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import logo from './../logo.svg';
import {HeaderLink} from "./header-link";
import {activateToken} from "../actions/activate-token";

class HeaderComponent extends React.Component {
	render(){
		const {token,userName} = this.props;
		return (
			<header className="container"> 
				<div className="user-login">
					<div>welcome, {userName}</div>
				</div>		
				{token && <HeaderLink linkHref={"/signout"} linkText={"Sign Out"}/>}
				{!token && <HeaderLink linkHref={"/signup"} linkText={"Sign Up"}/>}
                {!token && <HeaderLink linkHref={"/signin"} linkText={"Sign In"}/>}
                {token && <HeaderLink linkHref={"/recipes"} linkText={"Recipes"}/>}
				<div className="logo">
					<img src={logo} className="App-logo" alt="logo" />
				</div>
			</header>
		)
	}
}

const mapStateToProps = (state) => {
	const {token,userName} = state;
    return {
        token,userName
    }
}

export const Header = connect(mapStateToProps)(HeaderComponent);