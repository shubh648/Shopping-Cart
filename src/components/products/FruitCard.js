import React, { Component } from 'react'
import './products.css';
import { connect } from 'react-redux';

class Products extends Component {

	handlePlus =()=>{
		console.log("Plus");
	}

	handleMinus =()=>{
		console.log("Minus");
	}
	
	render() {
		
		return (
			<div className="fruit_card col-xs-6">
			<div className="fake_div">
				<div className="fruit_card_img">
					<img src={require('../../data/images/'+this.props.item.img+'')} alt={this.props.item.img}></img>
				</div>
				
				<div className="item-detail">
				<div className="fruit_card_name">
					<h5>{this.props.item.productName}</h5>
				</div>

					<div className="fruit_card_tag_price">
						<p><span>{this.props.item.price}	</span>/{this.props.item.measureIn}</p>
					</div>

				<div className="fruit_card_btn">
					<div className="plus_minus_btn">
						<div className="minus_btn" onClick={this.handleMinus}>
							<p>-</p>
						</div>
						<div className="total_btn">
							<p>{this.props.item.variation}{this.props.item.measureIn}</p>
						</div>
						<div className="plus_btn" onClick={this.handlePlus}>
							<p>+</p>
						</div>
					</div>
					<div className="shopping_cart_btn">
					</div>
				</div>
				</div>
			</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		productItem : state.productItem
	}
}

function mapDispatchToProps(dispatch){
	return{
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);	