/****************************Profile View react-native component & container*****************************/
import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import ProfileView from './ProfileView';

class ProfileContainer extends Component{
	constructor(props){
		super(props);
	}

	render(){
		if(this.props.userId){
			if(Meteor.collection('users').findOne({ _id: this.props.userId }, {profile: null})){
				return(
					<ProfileView
						profile={Meteor.collection('users').findOne({ _id: this.props.userId }).profile}
					/>	
				)
			} else {
				return(
					<ProfileView
						profile=''
					/>	
				)
			}
			
		} else {
			return(
				<ProfileView
					profile={this.props.profile}
				/>	
			)
		}
		
	}
}

export default createContainer(() => {
	Meteor.subscribe('users');
	if(Meteor.user().profile){
		profile=Meteor.user().profile;
	} else {
		profile='';
	}

	return {
		profile:profile
	}
}, ProfileContainer);
