/*********************************Home react-native component & container*****************************/
import React, { PropTypes, Component } from 'react';
import Home from './Home';
import Meteor , { createContainer } from 'react-native-meteor';

import Routes from '../../config/routes';

class HomeContainer extends Component {
	constructor(props){
		super(props)
	}

	shouldComponentUpdate(nextProps){
		return false
	}

	render(){
		return (
			<Home
				onSignInPress={() => this.props.navigator.push(Routes.getSignInRoute())}
				onLogoutPress={() => this.props.navigator.push(Routes.getLogoutRoute())}
				user={this.props.user}
			/>	
		);
	}
	
};

export default createContainer(() => {
	Meteor.subscribe('users')

	if(!Meteor.user()){
		user = ''
	} else {
		user = Meteor.user();
		Meteor.call('users.sessionUpdate', function(err){
			if(err)
				alert("err",err);
		})
	}
  return {
    user: user,
  };
}, HomeContainer);

