import React, { Component } from 'react';
import CartItem from '../components/CartItem.js';
import { getAll } from "../Api/products.js";
import {addToCart} from "../store/actions/actions.js"
import {connect} from "react-redux";
import {clearCart} from "../store/actions/actions.js"
class Cart extends Component {
    pay = () => {
        this.props.clearCart();
    }
    render() {
        return (
            <div>
                <h1>Carts</h1>

                <div className="row">
                    {this.props.cartItem.map((item , index) =>
                        <div className={'col-4'} key={index}>
                            <CartItem item={item} index = {index} />
                        </div>
                    )}
                </div>
                    <h3> Total Price : {this.props.total}</h3>
                <button className="btn btn-primary btn-block" onClick={this.pay}>Pay</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cartItem : state.cart , 
        total : state.cart.reduce((total, item) => total + item.quantity * item.product.price , 0) ,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart : () => dispatch(clearCart()) , 
    };
}

export default connect (mapStateToProps , mapDispatchToProps)(Cart);