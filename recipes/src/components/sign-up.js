import React from 'react';
import {SignMessage} from './sign-message';
import {Redirect} from "react-router-dom";
import {activateToken} from "../actions/activate-token";
import connect from "react-redux/es/connect/connect";
import {showSignUpMessage} from "../actions/show-sign-up-message";


export class SignUpComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      user: null,
      password: null,
      rePassword: null,
      email: null,
      error: null,
      signUped: false,
    }
  }

  updateUserEmail = (event) =>{
    this.setState({
      email: event.target.value
    })
  }

  updateUserName = (event) =>{
    this.setState({
      user: event.target.value
    })
  }

  updatePassword = (event) =>{
    this.setState({
      password: event.target.value
    })
  }  
  updateRePassword = (event) =>{
    this.setState({
      rePassword: event.target.value
    })
  }  

  signUp = (event) => {
    event.preventDefault();
    if(!this.checkRePass()){
      return;
    }
    if(!this.state.user || !this.state.email || !this.state.password){
      this.setState({
        error : <SignMessage message={'One of the fields is empty'} />
      });
      return;
    }
    const url = 'https://flatearth-api.herokuapp.com/api/v1/auth/signup'
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },      
      body:   JSON.stringify({ user:this.state.user, password: this.state.password, email: this.state.email  })
    }).then((responce) => {
      return responce.json();
    }).then( (responce) => {
      console.log(responce);
      // const res = JSON.parse(responce);
      if(responce.status === "error"){
        this.setState({
          error: <SignMessage message={responce.message} />
        })
      }
      if(responce.status === "success"){
        console.log('success');
        this.setState({
          error: null,
          signUped : true
        });

      }         
    });    
  }

  checkRePass = () => {
    if(this.state.rePassword !== this.state.password){
      this.setState({
          error: <SignMessage message={'Password mismatch'} />
      });
      return false;

    }else{
      this.setState({
        error: null
      });

      this.props.showSignUpMessage(`Congratulations! You've just entered to beautiful world.
      Enter name you've jusr registered and enjoy our recipies.`)
      return true;
    }
  }

  render(){
    if(this.state.signUped){
      return <Redirect to="/signin" params={{from: 'home'}} />;
    }
    return (      
      <div className="form well">
        {this.state.error}
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input type="email" name="email" className="form-control" id="inputEmail" placeholder="Email" onChange={this.updateUserEmail} />
            </div>
          </div>        
          <div className="form-group">
            <label htmlFor="inpuUsername" className="col-sm-2 control-label">Username</label>
            <div className="col-sm-10">
              <input type="text" name="user" className="form-control" id="inpuUsername" placeholder="Username" onChange={this.updateUserName} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input type="password" name="password"  className="form-control" id="inputPassword" placeholder="Password" onChange={this.updatePassword} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputRePassword" className="col-sm-2 control-label">Repeat Password</label>
            <div className="col-sm-10">
              <input type="password" name="repassword" className="form-control" id="inputRePassword" placeholder="Repeat Password" onChange={this.updateRePassword}  />
            </div>
          </div>          
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                <label>
                  <input type="checkbox" name="remember" /> Remember me 3
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" onClick={this.signUp} className="btn btn-default">Sign Up</button>
            </div>
          </div>
        </form>
      </div>          

    )
  }
}

const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = {
    showSignUpMessage
}

export const SignUp = connect(mapStateToProps,mapDispatchToProps)(SignUpComponent);