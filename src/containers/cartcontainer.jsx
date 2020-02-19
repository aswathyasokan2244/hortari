import React from "react";
import tiles from '../components/tiles';

export default class cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            cart: []
        }
    }

    initCart() {
        let myCart = localStorage.getItem('cart')
        console.log(myCart)
        myCart = JSON.parse(myCart)
        this.setState({
            cart: myCart || []
        })
    }

    clrcart() {
        localStorage.setItem('cart', JSON.stringify([]))
        this.setState({
            cart: []
        })
    }

    componentDidMount() {
        this.initCart()
    }
    
    render() {
        const productslist = this.state.cart.map((prod) => {
            return tiles(null, prod)
        })
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                    <a className="navbar-brand" href="#">Your Products</a>
                    <button className="btn btn-secondary" id="checkout-btn" onClick={() => {
                        this.clrcart();
                    }}>Clear Cart</button>
                </nav>
                <div className="container">
                    <div className="row">
                        <h2>Products</h2>
                    </div>
                    <div className="row">
                        {productslist}

                    </div>
                </div>
            </div>
        )
    }
}