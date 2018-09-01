import React, {Component} from 'react';

export class ShopGood extends Component {
    render() {
        const good = this.props.good;
        console.log(this.props.inBasket);
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{good.title}</h5>
                    <p className="card-text">{good.text}</p>
                        {this.props.inBasket ? (
                            <button className="btn btn-light" disabled>Buy</button>
                        ) : (
                            <button className="btn btn-primary" onClick={this.props.addGoodToCart}>Buy</button>
                        )}
                        {this.props.inBasket &&
                            <h3 className="text-success">✓✓✓✓✓</h3>    
                        }

                </div>
            </div>
        )

    }
}

