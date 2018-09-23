import React from 'react';

export class LoginError extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="alert alert-warning">
                    {this.props.message}
                </div>
            </React.Fragment>
        );
    }
}