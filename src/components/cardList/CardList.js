import React, { Component } from 'react'
import OneCard from './OneCard';
import './cardList.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

class ShoppingList extends Component {
	componentWillUnmount(){
		this.props.menuShopActive()
	}

	handleback =()=>{
		return this.props.history.push('/')
	}

	handleAdd = ()=>{
		console.log("ADD");
		
	}

	getCard = ()=>{
		return this.props.data.map((item)=>{
			return(
				<OneCard key={item.id} item={item} />
			)
		})
	}
	
	render() {
		return (
			<div className="card_list">
				<div className="card-header">
					<div className="list-back-button" onClick={this.handleback}>
						<FontAwesomeIcon className="list-back" icon={faChevronLeft} />							
					</div>
					<div className="card_list_header">
						<h3>Shopping List</h3>
					</div>
				</div>

				<div className="card_list_body">
					<this.getCard />
				</div>

				<div className="card_list_bottom" onClick={this.handleAdd}>
					<div className="plus_button">
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		data : state.data
	}
}

function mapDispatchToProps(dispatch){
	return{
		menuShopActive : ()=>{
			const action ={ type: 'ACTIVE_MENU_SHOP'}
			dispatch(action);
		},
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingList);