import React, { Component } from 'react';
import Swipeout from 'rc-swipeout';
import 'rc-swipeout/assets/index.css';
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

class OneCard extends Component {
	getMonth(data){
		const date = new Date(data);
		const month = date.toLocaleString('en-us', { month: 'short' });
		return month;
	}
	cardClick =(e)=>{
    e.preventDefault();
    return this.props.history.push({pathname: '/product-list', id: this.props.item.id})
  }

  getCollab = ()=>{
	return this.props.item.collaborators.map(collab=>{
		return(
			(collab.id>1)?(", "+collab.name):(collab.name)
		)
	})
  }
	render() {
		return (
			<div className="one_card">
				<div className="one_card_date">
					<div>
						{new Date(this.props.item.date).getDate()}
					</div>
					<div>
						{this.getMonth(this.props.item.date)}
					</div>
				</div>
				<Swipeout
					right={[
						{
							text: 'Delete',
							onPress:(e) => {e.preventDefault();console.log('delete')},
							style: { backgroundColor: 'red', color: 'white' },
							className: 'custom-class-2'
						}
					]}
					onOpen={(e) => console.log('open')}
					onClose={(e) => console.log('close')}
				>

					<div className="one_card_body" onClick={this.cardClick}>
						<div className="body-container">
							<div className="one_card_body_count">
								<p>{this.props.item.totalItems} Items</p>
							</div>
							<div className="one_card_body_name">
								<h2>
								{this.props.item.listName}
								</h2>
							</div>
							<div className="one_card_body_collaborators">
							<FontAwesomeIcon className="user-friends"  icon={faUserFriends} />
								<this.getCollab />
							</div>
						</div>
					</div>
				</Swipeout>
			</div>
		)
	}
}

export default withRouter(OneCard);