import { Route, withRouter } from 'react-router-dom'
import { Switch } from 'react-router'
import React, { Component } from 'react'
import CardList from '../components/cardList/CardList'
import ShoppingList from '../components/shoppingList/ShoppingList'
import Products from '../components/products/Products';

class AppRoute extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Products}/>
        <Route exact path='/card-list' component={CardList}/>
        <Route
					path='/product-list' exact strict
					render={
						({ location : {id}})=>
						<ShoppingList id={id} />
					}
				/>
      </Switch>
         )
     }
  
}


export default withRouter(AppRoute);


