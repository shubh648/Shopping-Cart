import React, { Component } from 'react'
import './products.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons'
import { faListAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import FruitCard from './FruitCard';

class Products extends Component {

	handleList = (e)=>{
		e.preventDefault();
		this.props.menuListActive()
		this.props.history.push('/card-list')
	}
	
	render() {
		return (
			<div className="products">
				<div className="scrolleble_part">
					<div className="products_header">
						<h2>Fruits and Vegetables</h2>
					</div>

					<div className="products_types">
						<div className="type_content active">
							<p>Fresh Fruits</p>
						</div>
						<div className="type_content">
							<p> Fresh Vegetables</p>
						</div>
					</div>

					<div className="products_card">
						{this.props.productItem.map((item)=>{
							return(
								<FruitCard item={item} key={item.productId}/>
							)
						})}
					</div>
				</div>

				<div className="menu_all">
					<div className="menu_shop" onClick={()=>this.props.menuShopActive()}>
						<FontAwesomeIcon className={this.props.shopMenu? "fa-icon active_icon": "fa-icon"} icon={faWarehouse} />
						<p className={this.props.shopMenu?"active_icon":""}>Shop</p>
					</div>
					<div className="menu_cart" onClick={()=>this.props.menuCartActive()}>
						<FontAwesomeIcon className={this.props.cartMenu ? "fa-icon active_icon": "fa-icon"} icon={faShoppingCart} />
						<p className={this.props.cartMenu?"active_icon":""}>Cart</p>
					</div>
					<div className="menu_deals" onClick={()=>this.props.menuDealsActive()}>
						<FontAwesomeIcon className={this.props.dealsMenu? "fa-icon active_icon": "fa-icon"} icon={faBriefcaseMedical} />
						<p className={this.props.dealsMenu?"active_icon":""}>Deals</p>
					</div>
					<div className="menu_list" onClick={this.handleList}>
						<FontAwesomeIcon className={this.props.listMenu? "fa-icon active_icon": "fa-icon"} icon={faListAlt} />
						<p className={this.props.listMenu?"active_icon":""}>List</p>
					</div>
					<div className="menu_profile" onClick={()=>this.props.menuProfileActive()}>
						<FontAwesomeIcon className={this.props.profileMenu? "fa-icon active_icon": "fa-icon"} icon={faUserAlt} />
						<p className={this.props.profileMenu?"active_icon":""}>Profile</p>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
	productItem : state.productItem,
	shopMenu : state.shopMenu,
  	cartMenu : state.cartMenu,
  	dealsMenu : state.dealsMenu,
  	listMenu : state.listMenu,
  	profileMenu : state.profileMenu
	}
}

function mapDispatchToProps(dispatch){
	return{
		menuShopActive : ()=>{
			const action ={ type: 'ACTIVE_MENU_SHOP'}
			dispatch(action);
		},
		menuCartActive : ()=>{
			const action ={ type: 'ACTIVE_MENU_CART'}
			dispatch(action);
		},
		menuDealsActive : ()=>{
			const action ={ type: 'ACTIVE_MENU_DEALS'}
			dispatch(action);
		},
		menuListActive : ()=>{
			const action ={ type: 'ACTIVE_MENU_LIST'}
			dispatch(action);
		},
		menuProfileActive : ()=>{
			const action ={ type: 'ACTIVE_MENU_PROFILE'}
			dispatch(action);
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);