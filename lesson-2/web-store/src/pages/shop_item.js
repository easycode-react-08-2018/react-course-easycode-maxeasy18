import React, {Component} from 'react';

export class ShopItem extends Component {
    render() {
        const item = this.props.item;
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                        {this.props.inBasket ? (
                            <button className="btn btn-light" disabled>Buy</button>
                        ) : (
                            <button className="btn btn-primary" onClick={this.props.addItemToCart}>Buy</button>
                        )}
                        {this.props.inBasket &&
                            <h3 className="text-success">✓✓✓✓✓</h3>    
                        }

                </div>
            </div>
        )

    }
}

