import React, {Component} from 'react';
import './Display.css';
import fire from '../fire/fire';
import axios from 'axios';
 
const PRODUCTPRICE = {
    CrochetedHemJerseyDress: 4999,
    LadyinBlackDress: 6299,
    WhiteDenimJacket: 6599,
    AdidasBlackJacket: 4499,
    NauticalBlackSleeve: 3299,
    BlackandWhiteStripeSleeve: 3899,
    GraphicLipTee: 1299,
    ScoopNeckTee: 2699,
    SleevelessRuffleTripTop: 2999,
    TurtleneckTop: 3299,
}

class Product extends Component {
   constructor(props) {
       super(props);
       this.logout = this.logout.bind(this);
       this.state ={
        prod: [],
        CrochetedHemJerseyDress: 0,
        LadyinBlackDress: 0,
        WhiteDenimJacket: 0,
        AdidasBlackJacket: 0,
        NauticalBlackSleeve: 0,
        BlackandWhiteStripeSleeve: 0,
        GraphicLipTee: 0,
        ScoopNeckTee: 0,
        SleevelessRuffleTripTop: 0,
        TurtleneckTop: 0,
        totalPrice: 0
       }
       }

   logout() {
       fire.auth().signOut();
   }

   componentDidMount () {
       axios.get ('https://reactjs-machine-problem.firebaseio.com/Products.json')
       .then(response => {
           this.setState({prod: [response.data]})
           //console.log(response);
       })

   }
   addOrder (productName) {
        let total = this.state[productName];
        total = total + 1;
        let totalPrice = this.state.totalPrice;
        totalPrice = totalPrice + PRODUCTPRICE[productName];
        this.setState({ [productName]: total, totalPrice: totalPrice})
   }
   removeOrder (productName) {
        let total = this.state[productName];
        if (total !== 0);
        total = total - 1;
        let totalPrice = this.state.totalPrice;
        totalPrice = totalPrice - PRODUCTPRICE[productName];
        this.setState({ [productName]: total, totalPrice: totalPrice})
    }

    userCheckout = () => {
        const user = fire.auth().currentUser;
        const email = user.email;
        const productOrders = {
            Orders: {
                CrochetedHemJerseyDress: this.state.CrochetedHemJerseyDress,
                LadyinBlackDress: this.state.LadyinBlackDress,
                WhiteDenimJacket: this.state.WhiteDenimJacket,
                AdidasBlackJacket: this.state.AdidasBlackJacket,
                NauticalBlackSleeve: this.state.NauticalBlackSleeve,
                BlackandWhiteStripeSleeve: this.state.BlackandWhiteStripeSleeve,
                GraphicLipTee: this.state.GraphicLipTee,
                ScoopNeckTee: this.state.ScoopNeckTee,
                SleevelessRuffleTripTop: this.state.SleevelessRuffleTripTop,
                TurtleneckTop: this.state.TurtleneckTop}
          
        }
        const Checkout = {Orders: productOrders, price: this.state.totalPrice, user: email}
        
        axios.post('https://reactjs-machine-problem.firebaseio.com/Checkout.json', Checkout)
        .then(response => {
            console.log(response);
        })
    };
    render () {

        const prod = this.state.prod.map(prod =>(
            <div className = "Products">
                <li key ={prod.Dress.id}>
                    <p><br/>
                    <img src= {prod.Dress.img} alt = "Dress"/><br/>
                    <strong> {prod.Dress.name}</strong><br/>
                     Brand: {prod.Dress.brand}<br/>
                     Price: {prod.Dress.price}<br/>
                    <button onClick ={this.addOrder.bind(this, prod.Dress.productName)}> Add to Cart </button>
                    <button onClick ={this.removeOrder.bind(this, prod.Dress.productName)}> Remove </button>
                    </p>
                 </li>
                 <li key ={prod.Dress2.id}>
                    <p><br/>
                    <img src= {prod.Dress2.img}  alt = "Dress2"/><br/>
                    <strong> {prod.Dress2.name} </strong><br/>
                    Brand: {prod.Dress2.brand}<br/>
                    Price: {prod.Dress2.price}<br/>
                    <button onClick ={this.addOrder.bind(this, prod.Dress2.productName)}>  Add to Cart </button>
                    <button onClick ={this.removeOrder.bind(this, prod.Dress2.productName)}> Remove </button>
                    </p>
                </li>
                <li key ={prod.Tops.id}>
                    <p><br/>
                    <img src= {prod.Tops.img}  alt = "Tops"/><br/>
                    <strong>{prod.Tops.name} </strong><br/>
                    Brand: {prod.Tops.brand}<br/>
                    Price: {prod.Tops.price}<br/>
                    <button onClick ={this.addOrder.bind(this, prod.Tops.productName)}> Add to Cart </button>
                    <button onClick ={this.removeOrder.bind(this, prod.Tops.productName)}> Remove </button>
                    </p>
                </li>
                <li key ={prod.Sleeves.id}>
                    <p><br/>
                    <img src= {prod.Sleeves.img}  alt = "Sleeves"/><br/>
                    <strong> {prod.Sleeves.name}</strong><br/>
                    Brand: {prod.Sleeves.brand}<br/>
                    Price: {prod.Sleeves.price}<br/>
                    <button onClick ={this.addOrder.bind(this, prod.Sleeves.productName)}> Add to Cart </button>
                    <button onClick ={this.removeOrder.bind(this, prod.Sleeves.productName)}> Remove </button>
                    </p>
                </li>
                <li key ={prod.Sleeves1.id}>
                    <p><br/>
                     <img src= {prod.Sleeves1.img} alt = "Sleeves1s"/> <br/>
                    <strong > {prod.Sleeves1.name}</strong><br/>
                     Brand: {prod.Sleeves1.brand}<br/>
                     Price: {prod.Sleeves1.price}<br/>
                    <button onClick ={this.addOrder.bind(this, prod.Sleeves1.productName)}> Add to Cart </button>
                    <button onClick ={this.removeOrder.bind(this, prod.Sleeves1.productName)}> Remove </button>
                    </p>
                </li>
                <li key ={prod.Tees.id}>
                    <p><br/>
                    <img src= {prod.Tees.img} alt = "Tees"/> <br/>
                    <strong>{prod.Tees.name}</strong><br/>
                     Brand: {prod.Tees.brand}<br/>
                     Price: {prod.Tees.price}<br/>
                    <button onClick ={this.addOrder.bind(this, prod.Tees.productName)}> Add Cart </button>
                    <button onClick ={this.removeOrder.bind(this, prod.Tees.productName)}> Remove </button>
                    </p>
                </li>
                <li key ={prod.Tees1.id}>
                    <p><br/>
                    <img src= {prod.Tees1.img} alt = "Tees1"/><br/>
                    <strong> {prod.Tees1.name}</strong><br/>
                    Brand: {prod.Tees1.brand}<br/>
                    Price: {prod.Tees1.price}<br/>
                    <button onClick ={this.addOrder.bind(this, prod.Tees1.productName)}> Add to Cart </button>
                    <button onClick ={this.removeOrder.bind(this, prod.Tees1.productName)}> Remove </button>
                    </p>
                </li>  
    
                <li key ={prod.Tops2.id}>
                    <p><br/>
                    <img src= {prod.Tops2.img} alt = "Tops2"/><br/>
                    <strong> {prod.Tops2.name}</strong><br/>
                    Brand: {prod.Tops2.brand}<br/>
                    Price: {prod.Tops2.price}<br/>
                    <button onClick ={this.addOrder.bind(this, prod.Tops2.productName)}> Add to Cart </button>
                    <button onClick ={this.removeOrder.bind(this, prod.Tops2.productName)}> Remove </button>
                    </p>
                </li>
                <li key ={prod.Jacket1.id}>
                    <p><br/>
                    <img src= {prod.Jacket1.img} alt = "Jacket"/><br/>
                    <strong>{prod.Jacket1.name}</strong><br/>
                    Brand: {prod.Jacket1.brand}<br/>
                    Price: {prod.Jacket1.price}<br/>
                    <button onClick ={this.addOrder.bind(this, prod.Jacket1.productName)}> Add to Cart </button>
                    <button onClick ={this.removeOrder.bind(this, prod.Jacket1.productName)}> Remove </button>
                    </p>
                </li>
                <li key ={prod.Jacket.id}>
                    <p><br/>
                    <img src= {prod.Jacket.img} alt = "Jacket"/><br/>
                    <strong>{prod.Jacket.name}</strong><br/>
                    Brand: {prod.Jacket.brand}<br/>
                    Price: {prod.Jacket.price}<br/>
                    <button onClick ={this.addOrder.bind(this, prod.Jacket.productName)}> Add to Cart </button>
                    <button onClick ={this.removeOrder.bind(this, prod.Jacket.productName)}> Remove </button>
                    </p>
                </li>
                
            </div>
        
        ));

        return (
            <div>
                    <button className = "Display" onClick = {this.logout } ><strong>  Logout </strong> </button>
                     <h4 className ="checkout"><br/> 
                        Crocheted-Hem Jersey Dress: {this.state.CrochetedHemJerseyDress}<br/>
                        Lady in Black Dress: {this.state.LadyinBlackDress} <br/>
                        White Denim Jacket: {this.state.WhiteDenimJacket} <br/>
                        Adidas Black Jacket:{this.state.AdidasBlackJacket}<br/>
                        Nautica lBlack Sleeve: {this.state.NauticalBlackSleeve} <br/>
                        Black and White Stripe Sleeve:{this.state.BlackandWhiteStripeSleeve} <br/>
                        Graphic Lip Tee: {this.state.GraphicLipTee} <br/>
                        Scoop Neck Tee: {this.state.ScoopNeckTee}<br/>
                        Sleeveless Ruffle Trip Top: {this.state.SleevelessRuffleTripTop} <br/>
                        Turtleneck Top: {this.state.TurtleneckTop} <br/>  <br/>
                        <strong> Total Price: {this.state.totalPrice} </strong><br />
                        <button onClick ={this.userCheckout}> Checkout </button>
                    </h4>
                   
                    {prod}
            </div>
        );
    }
}
export default Product;