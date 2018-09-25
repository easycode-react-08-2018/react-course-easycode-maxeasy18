import React from 'react';

export class SignMessage extends React.Component {
    render(){
        const {message,className} = this.props;
        return (
            <React.Fragment>
                <div className={className}>
                    {message}
                </div>
            </React.Fragment>
        );
    }
}