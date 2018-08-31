import React, {Component} from 'react';

export class Card extends Component {
  render() { 
    return (  
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h1>Shopping Cart</h1>
          <ul className="list-group">
            <li className="list-group-item">
              <img src="#" alt=""/>
              <a href="#" className="admin-orders__link">
                MacBook Pro 2018
              </a>
              <h2 className="float-right badge-light">✓</h2>
            </li>
            <li className="list-group-item">
              <img src="#" alt=""/>
              <a href="#" className="admin-orders__link">
                Dell xs
              </a>
              <h2 className="float-right badge-light">✓</h2>
            </li>
            <li className="list-group-item">
              <img src="#" alt=""/>
              <a href="#" className="admin-orders__link">
                Microsoft Surface
              </a>
              <h2 className="float-right badge-light">✓</h2>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <div>
            User
          </div>
          <button onClick={this.props.changePageToHomePage}>User Logout</button>
        </div>
      </div>
      <div className="row">
        <pre>price:</pre>
      </div>
      <div className="row">
        <button className="btn btn-primary">Ship it</button>
      </div>
    </div>
    )
  }
}