import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class ShoppingList extends Component {


	plus = ()=>{
		console.log("Plus");		
	}
	minus = ()=>{
		console.log("Minus");		
	}

	getPrice =()=>{
		return (
			(this.props.products.unit === "gms")?
			((this.props.pro_duc.price/1000)*this.props.products.quantity):
			(this.props.pro_duc.price * this.props.products.quantity)
		)
	}

	getProducts =()=>{
		return(
			<div className="product-detail">
				<div className="price-container">
					<h4>{this.props.pro_duc.productName}</h4>
					<p className="price-per-unit">{this.props.pro_duc.price}/{this.props.pro_duc.measureIn}</p>
					<p className="price"> &#x20B9; <this.getPrice /></p>
				</div>
				<div className="space"></div>
				<div className="quantity">
					<h4>{this.props.products.quantity}{this.props.products.unit}</h4>
					<div className="button-container">
						<div className="plus" onClick={this.plus}><h3>+</h3></div>
						<div className="minus" onClick={this.minus}><h3>-</h3></div>
					</div>
				</div>
			</div>
		)
	}


	render() {
		return (
			<div className="product_card">
				<div className="product_card_img">
					<img src={require('../../data/images/'+this.props.pro_duc.img+'')} alt={this.props.pro_duc.img}></img>
				</div>
				<this.getProducts />
			</div>
		)
	}
}

export default withRouter(ShoppingList);