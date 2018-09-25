import React from 'react';
import { Link } from "react-router-dom";

export class HeaderLink extends React.Component {
    render() {
        return (
            <div className="links">
                <Link to={this.props.linkHref}>{this.props.linkText}</Link>
            </div>
        )
    }
}