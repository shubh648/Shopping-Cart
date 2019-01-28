import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import './shoppingList.css'
import ProductCard from './ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

class ShoppingList extends Component {
	total = 0
	componentDidMount(){
		if(!this.props.id){
			return this.props.history.push('/');
		}
	}
	getItem = ()=>{	
		return this.props.data.find(item=>
			item.id === this.props.id
		)
	}
	handleEmpty =() =>{
		console.log("Empty");
	}

	handleAddCollab =()=>{
		console.log("Add Collab");
	}

	handleCollabClose =()=>{
		console.log("Delete Collab");
	}

	handleEdit = ()=>{
		console.log("Edit");
		
	}

	handleback =()=>{
		return this.props.history.push('/card-list')
	}

	handleCheckout =()=>{
		console.log("Checkout");	
	}
	
	render() {
		return (
			<div className="shopping_list">
				<div className="shopping_list_header">
					<div className="back-button" onClick={this.handleback}>
						<FontAwesomeIcon className="back" icon={faChevronLeft} />							
					</div>
					<h1>{this.props.id && this.getItem().listName}</h1>
					<div className="space"></div>
					<div className="edit-button" onClick={this.handleEdit}>
						<FontAwesomeIcon className="edit" icon={faPen} />							
					</div>
				</div>
				
				<div className="card-container">
					<div className="collabs-container">
						{this.props.id && this.getItem().collaborators.map(collab=>
							<div className="collabs" key={collab.id}>
								<div className="collabs-detail">
									{collab.name}
									<div className="collab-close" onClick={this.handleCollabClose}>X</div>
								</div>
							</div>						
						)}
						<div className="space"></div>
						<div className="add-collab" onClick={this.handleAddCollab}>
							<FontAwesomeIcon className="user-plus" icon={faUserPlus} />							
						</div>	
					</div>
					<div className="category-container">
						<div className="category">
							<h4>
								{this.props.id && this.getItem().category+" "}
								({
									(this.props.id && this.getItem().totalItems<10)?
									("0"+(this.props.id && this.getItem().totalItems)):
									(this.props.id && this.getItem().totalItems)
								} items)
							</h4>
						</div>
						<div className="space"></div>
						<div className="empty" onClick={this.handleEmpty}>
							<FontAwesomeIcon className="trash" icon={faTrashAlt} />							
							<h5>Empty</h5>
						</div>
					</div>
					{this.props.id && this.getItem().items.map((products)=>{

						const pro_duc = this.props.productItem.find((item)=>{

							if(item.productId === products.itemId){
								(products.unit === "gms")?
								(this.total +=(item.price/1000*products.quantity)):
								(this.total +=item.price*products.quantity)
								return true;
							}
							return false;
						})
						return(
							<ProductCard  products={products} pro_duc={pro_duc} key={products.itemId} />
						)
					})}
				</div>
				<div className="shopping_list_checkout">
					<div className="shopping_list_checkout_sum col-xs-6">
						<p>Total Items : {
									(this.props.id && this.getItem().totalItems<10)?
									("0"+(this.props.id && this.getItem().totalItems)):
									(this.props.id && this.getItem().totalItems)
								} </p>
						<h2>&#x20B9; {this.total}</h2>
						<p className="GST">Estimated cost including GST</p>
					</div>
					<div className="shopping_list_checkout_btn col-xs-6">
						<div className="checkout_btn" onClick={this.handleCheckout}>
							<h4>Checkout</h4>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		data : state.data,
		productItem : state.productItem
	}
}

export default connect(mapStateToProps)(withRouter(ShoppingList));