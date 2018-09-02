import React, {Component} from 'react';
import {AdminGood} from './admin_good';


export class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {inputValue: ''};
        this.handleChange = this.handleChange.bind(this);
        this.addGood = this.addGood.bind(this);
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }  

    addGood(){
        this.props.addGood(this.state.inputValue);
    }

    render() {
        const goods = this.props.goods;
        const returnListOfGoods = (goods) => {
          return goods.map(( good ) => {
            const removeGood = () => {
              this.props.removeGood(good.id);
            }
            return <AdminGood key={good.id} good={good} removeGood={removeGood}  ></AdminGood>
          });
        }        
        return <div className="container flex-grow-1">
            <div className="row">
                <div className="col-8">
                    <div className="admin-orders">
                        <h1>ADMIN PAGE</h1>
                        <ul className="list-group">
                            {returnListOfGoods(goods)}
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
                            <button className="btn btn-primary" onClick={this.addGood}>Add</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div>
                        Admin
                    </div>
                    <button className="btn btn-primary" onClick={this.props.changePageToCartPage}>
                      Orders
                    </button>
                    <br/>
                    <button onClick={this.props.changePageToHomePage}>User Logout</button>
                </div>
            </div>
        </div>
    }
}