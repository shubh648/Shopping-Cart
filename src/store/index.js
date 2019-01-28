import { createStore } from 'redux';

const data = require('../data/data.json');
const product = require('../data/product.json');

const initialState ={
  data : data.data,
  productItem : product.products,
  shopMenu : true,
  cartMenu : false,
  dealsMenu : false,
  listMenu : false,
  profileMenu : false
}

const reducer = (state = initialState, action)=>{
  switch (action.type){
    case "ACTIVE_MENU_SHOP":
      return Object.assign({}, state, {shopMenu : true, cartMenu : false, dealsMenu: false, listMenu: false, profileMenu : false})
    case "ACTIVE_MENU_CART":
      return Object.assign({}, state, {shopMenu : false, cartMenu : true, dealsMenu: false, listMenu: false, profileMenu : false})
    case "ACTIVE_MENU_DEALS":
      return Object.assign({}, state, {shopMenu : false, cartMenu : false, dealsMenu: true, listMenu: false, profileMenu : false})
    case "ACTIVE_MENU_LIST":
      return Object.assign({}, state, {shopMenu : false, cartMenu : false, dealsMenu: false, listMenu: true, profileMenu : false})
    case "ACTIVE_MENU_PROFILE":
      return Object.assign({}, state, {shopMenu : false, cartMenu : false, dealsMenu: false, listMenu: false, profileMenu : true})
    default:
      return state
  }
}

const store = createStore(reducer);

export default store;