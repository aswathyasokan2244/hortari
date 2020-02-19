import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import tiles from './components/tiles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstState: 'Welcome',
      cartCount: 0,
      product: [],
      cart: []
    }
  }

  componentDidMount() {
    this.loadproducts()
    this.initCart()
  }

  initCart() {
    let myCart = localStorage.getItem('cart')
    console.log(myCart)
    myCart = JSON.parse(myCart)
    this.setState({
      cart: myCart || []
    })

  }

  addCart(prod) {
    const newCart = this.state.cart;
    newCart.push(prod);
    localStorage.setItem('cart', JSON.stringify(newCart))
    this.setState({
      cart: newCart
    })
  }

  loadproducts() {
    fetch('https://my-json-server.typicode.com/shiyasvp92/sample_products/products', {
      method: 'GET'
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({
          product: data
        })
      })
      .catch((error) => {
        console.error(error)
      })

  }
  viewCart() {
    console.log(this.state.cart)
  }
  render() {
    const productslist = this.state.product.map((prod) => {
      return tiles(this.addCart.bind(this), prod)
    })

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
          <a className="navbar-brand" href="#">Navbar</a>
          <Link to="/cart">
            <button onClick={() => { this.loadproducts() }}>load products</button>
            <button className="right" type="button" onClick={() => {
              this.viewCart();
            }}>
              Cart ({this.state.cart.length})
        </button>
          </Link>
        </nav>
        <div className="container">
          <div className="row">
            <h2>Products</h2>
          </div>
          <div className="row">
            {productslist}
          </div>
          <div className="row d-flex justify-content-end">
            <button className="btn btn-primary" id="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
