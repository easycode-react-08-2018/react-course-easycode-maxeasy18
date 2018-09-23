import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import logo from './../logo.svg';
import {HeaderLink} from "./header-link";
import {activateToken} from "../actions/activate-token";

class HeaderComponent extends React.Component {
	render(){
		const isSigned = this.props.token;
		return (
			<header className="container"> 
				<div className="user-login">
					<div>welcome, guest</div>
				</div>		
				{isSigned && <HeaderLink linkHref={"/signout"} linkText={"Sign Out"}/>}
				{!isSigned && <HeaderLink linkHref={"/signup"} linkText={"Sign Up"}/>}
                {!isSigned && <HeaderLink linkHref={"/signin"} linkText={"Sign In"}/>}
                {isSigned && <HeaderLink linkHref={"/recipes"} linkText={"Recipes"}/>}
				<div className="logo">
					<img src={logo} className="App-logo" alt="logo" />
				</div>
			</header>
		)
	}
}

const mapStateToProps = state => {
    return {
        token : state.token
    }
}

export const Header = connect(mapStateToProps)(HeaderComponent);