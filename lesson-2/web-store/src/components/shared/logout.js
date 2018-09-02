import React, {Component} from "react";

export class Logout extends Component {
    render () {
        return <button onClick={this.props.changePageToHomePage}>User Logout</button>
    }
}
