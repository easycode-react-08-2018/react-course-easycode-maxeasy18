import React, {Component} from 'react';
import {AdminItem} from './admin_item';
import {Orders} from './../components/shared/orders_button.js';
import {Logout} from './../components/shared/logout';


export class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {inputValue: ''};
        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }  

    addItem(){
        this.props.addItem(this.state.inputValue);
    }

    render() {
        const items = this.props.items;
        const returnListOfItems = (items) => {
          return items.map(( item ) => {
            const removeItem = () => {
              this.props.removeItem(item.id);
            }
            return <AdminItem key={item.id} item={item} removeItem={removeItem}  ></AdminItem>
          });
        }        
        return <div className="container flex-grow-1">
            <div className="row">
                <div className="col-8">
                    <div className="admin-orders">
                        <h1>ADMIN PAGE</h1>
                        <ul className="list-group">
                            {returnListOfItems(items)}
                        </ul>
                        <br/>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.inputValue} 
                                placeholder="enter new name"
                                onChange={this.handleChange}
                                />
                            <button className="btn btn-primary" onClick={this.addItem}>Add</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div>
                        Admin
                    </div>
                    <Orders changePageToCartPage={this.props.changePageToCartPage} ></Orders>
                    <br/>
                    <Logout changePageToHomePage={this.props.changePageToHomePage}></Logout>
                </div>
            </div>
        </div>
    }
}