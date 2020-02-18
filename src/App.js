import React from 'react';
import logo from './logo.svg';
import './App.css';
import tiles from './components/tiles';

const productsAr=[
  {
    "id":1,
     "title":"Realme 5i (Forest Green, 64 GB)  (4 GB RAM)",
     "price":"₹8,999",
     "image":"https://rukminim1.flixcart.com/image/312/312/k612pow0/mobile/b/s/r/realme-c3-rmx2027-original-imafzkzhts5kfmxt.jpeg?q=70"
  },
  {
    "id":2,
     "title":"Realme 5i (Aqua Blue, 64 GB)  (4 GB RAM)",
     "price":"₹8,999",
     "image":"https://rukminim1.flixcart.com/image/416/416/k65d18w0pkrrdj/mobile/r/x/z/realme-5i-rmx2030-original-imafnsx5pakdfdpb.jpeg?q=70"
  },
  {
    "id":3,
     "title":"Redmi 7A (Matte Black, 32 GB)  (2 GB RAM)",
     "price":"₹5,499",
     "image":"https://rukminim1.flixcart.com/image/416/416/jzrb53k0pkrrdj/mobile/y/c/h/mi-redmi-7a-mzb7798in-original-imafg27hkgpkhsdy.jpeg?q=70"
  },
]
class App extends React.Component {
   constructor(props){
     super(props);
     this.state={
       firstState: 'Welcome',
      cartCount:0,
       product:[]
     }
   }

  componentDidMount() {
    this.setState({
      firstState:'The biggest choice',
    
    })
  }
 
  addCount(){
    const newCount=this.state.cartCount+1;
    this.setState({
      cartCount:newCount
    })
  }
  componentDidUpdate(prevProps,prevState){
    if(this.state.cartCount===10)
      alert('Not possible')
  }
  loadproducts(){
    this.setState({
      product:productsAr
    })
  }
  render() {
    const productslist=this.state.product.map((prod)=>{
       return tiles(this.addCount.bind(this),prod)
    })
    console.log(productslist)
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
          <a className="navbar-brand" href="#">Navbar</a>
          <button onClick={()=>{this.loadproducts()}}>load products</button>
          <button className="right" type="button">
            Cart ({this.state.cartCount})
        </button>        
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
