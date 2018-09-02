import React, {Component} from 'react';

export class Login extends Component {

    render() { 
    	return (   
	        <div className="container">
	          <h1>Main Page</h1>
	          <div className="row">
	            <button 
		            className="btn btn-primary"
		            onClick={this.props.changePageToUserPage}
		            >Login as User</button>
	            <button 
		            className="btn btn-outline-primary"
		            onClick={this.props.changePageToAdminPage}
		            >Login as Admin</button>
	          </div>
	        </div>
        )
    }
}