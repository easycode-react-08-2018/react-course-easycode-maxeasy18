import React from 'react';
import {connect} from 'react-redux';
import {signOutAction} from "../actions/sign-out-action";
import {SignMessage} from "./sign-message";

class SignOutComponent extends React.Component {

    shouldComponentUpdate(nextProps, nextState, nextContext){
        return !this.props.userName === nextProps.userName;
    }
    render() {
        const userName = this.props.userName;
        console.log(userName);
        return (
            <div className="links">
                {console.log(userName)}
                <SignMessage
                    className={"alert alert-success"}
                    message={`Goodbuy, dear ${userName}`} />

            </div>
        )
    }
    componentDidMount(){
        this.props.signOut();
        this.props.userName;
    }
}
const mapStateToProps = state => {
    return {
        userName : state.userName
    }
}
const mapDispatchToProps = {
    signOut: signOutAction
}
export const SignOut = connect(mapStateToProps,mapDispatchToProps)(SignOutComponent);