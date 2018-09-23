import React from 'react';
import {LoginError} from './login-error';
import {connect} from 'react-redux';
import {activateToken} from "../actions/activate-token";

class SignInComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName: null,
      password: null,
      error: null
    }
  }

  updateUserName = (event) =>{
    this.setState({
      userName: event.target.value
    })
  }

  updatePassword = (event) =>{
    this.setState({
      password: event.target.value
    })
  }  

  signIn = (event) => {
    event.preventDefault();
    const url = 'https://flatearth-api.herokuapp.com/api/v1/auth/login'
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },      
      body:   JSON.stringify({ user:this.state.userName, password: this.state.password })
    }).then((response) => {
      return response.json();
    }).then( (response) => {
      if(response.status === "error"){
        this.setState({
          error: <LoginError message={response.message} />
        })
      }else if(response.status === "success"){
        const {token} = response.message;
        console.log(response.message);
        const user =  response.message.user.name;
        console.log(user);
        console.log({token,userName:user});
        this.props.activateToken({token,userName:user});
      }
    });    
  }
  render(){
    console.log(this.props.token);
    return (
      <div className="form well">
        {this.state.error}
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Username</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEmail3" placeholder="Username" onChange={this.updateUserName} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password" onChange={this.updatePassword} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Remember me 3
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" onClick={this.signIn} className="btn btn-default">Sign in</button>
            </div>
          </div>
        </form>
      </div>          

    )
  }
}
const mapStateToProps = state => {
  return {
    token : state.token
  }
}
const mapDispatchToProps = {
  activateToken
}

export const SignIn = connect(mapStateToProps,mapDispatchToProps)(SignInComponent);