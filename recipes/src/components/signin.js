import React from 'react';

export class SignIn extends React.Component {
  constructor(){
    super();
    this.state = {
      userName: null,
      password: null
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

  signIn(event){
    event.preventDefault();
    const url = 'https://gist.github.com/OlegLustenko/login'
    fetch(url, {
      method: "POST",
      body:   { user:"sa", password: "admin" }
    }).then((responce) => {
      responce.json();
    }).then( (responce) => {
      console.log(responce);
    });    
  }
  render(){
    return (
      
      <div className="form well">
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
                  <input type="checkbox" /> Remember me
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