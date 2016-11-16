/****************************Main react-native component & container*****************************/
import React, {Component} from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import { MenuContext } from 'react-native-menu';

import TopNavigation from './layouts/TopNavigation';
import settings from './config/settings';
import Logged from './layouts/Logged';
import LoggedIn from './layouts/LoggedIn';
import Loading from './components/Loading';
import Home from './routes/Home';

Meteor.connect(settings.METEOR_URL);

class Blog extends Component{
	render(){
		const { status, user, loggingIn } = this.props;

		if (status.connected === false || loggingIn) {
			return <Loading message="Logging in to Deligence Technologies Blog"/>
		}	
		else if (user !== null) {
		    return <LoggedIn />;
		} else {
			return <Logged />;
		}
	}
	
}

export default createContainer(() => {
  return {
    status: Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
  };
}, Blog);