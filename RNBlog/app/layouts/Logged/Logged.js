/******************************************Layout for logged out users********************************************/
import React from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { Image, Text, View } from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import Meteor from 'react-native-meteor';

import Routes from '../../config/routes';
import images from '../../config/images';
import styles from './styles';

//uses navigator and ex-navigator to navigate user through app
class Logged extends React.Component {
	constructor(props){
		super(props);
		this.state={
			selectedTab:'Home',
		};
	}

	renderTabItem(title, initialRoute, Icon, event){
		const { selectedTab } = this.state;
		const sceneStyle = [];
			
		if(initialRoute.showNavigationBar == true){
			sceneStyle.push({paddingTop:64 });
		} 
		return(
			<TabNavigator.Item
				selected={selectedTab === title}
				renderIcon={() => <Image style={styles.icon} source={Icon} />}
		        renderSelectedIcon={() => (
		          <Image
		            style={[styles.icon, styles.iconSelected]}
		            source={Icon}
		          />
		        )}
				onPress={() => this.setState({ selectedTab: title })}>	
				
				<ExNavigator
				initialRoute={initialRoute}
				 style={{flex:1}}
				sceneStyle={sceneStyle}
				showNavigationBar={initialRoute.showNavigationBar}	
				/>	
			</TabNavigator.Item>	
		);
	}
	render(){
		let sceneStyle = {};
		let tabBarStyle = {}
		tabBarStyle.height = 0;
		tabBarStyle.overflow = 'hidden';
		sceneStyle.paddingBottom = 0;
		
		return(
			<TabNavigator tabBarStyle={tabBarStyle} sceneStyle={sceneStyle}>
				{this.renderTabItem('Home', Routes.getHomeRoute(),images.icons.home)}
				{this.renderTabItem('Blogs', Routes.getBlogRoute(),images.icons.blog)}
				{this.renderTabItem('Sign In', Routes.getSignInRoute(),images.icons.profile)}
			</TabNavigator>	
		);
	}
};

export default Logged;