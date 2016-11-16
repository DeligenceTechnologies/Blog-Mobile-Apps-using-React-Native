/************************************Home react-native component view**********************************/
import React, { PropTypes } from 'react';
import { Text, View, Image } from 'react-native';

import Button from '../../components/Button';
import Meteor from 'react-native-meteor';
import images from '../../config/images';
import styles from './styles';

const Home = (props) =>{
	const {user} = props;
	console.log("ook")
	return(	
		<Image 
			style={styles.backgroundImage}
       		source={images.backGround} >
			<View style={styles.container}>
          		<Text style={styles.main}>
					Welcome to Deligence Technologies Blog!!! 
				</Text>
				{user?
					<Button
						text = "Logout"
						onPress={props.onLogoutPress}
					/>
				:
					<Button
						text = "Log In"
						onPress={props.onSignInPress}
					/>
				}
			</View>	
		</Image>
	);
};

export default Home;