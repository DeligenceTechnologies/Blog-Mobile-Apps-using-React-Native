/*********************************Sign Up react-native component view*****************************/
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { MenuContext } from 'react-native-menu';

import TopNavigation from '../../../layouts/TopNavigation';
import Button from '../../../components/Button';
import images from '../../../config/images';
import styles from './styles';


const SignUp = (props) => {
	const {updateState, createAccount, error } = props;
	return (
		<Image 
			style={styles.backgroundImage}
       		source={images.backGround} >
       		<ScrollView 
				ref={(scrollView) =>  this.scroller = scrollView}
		        automaticallyAdjustContentInsets={false}
		        scrollEventThrottle={200}
		        keyboardShouldPersistTaps={true}
		        onScroll={props.handleScroll}
		        onLayout={props.handleLayout}
		        >
				<View>
					<View>
						<Text style={styles.header}>
							Create your Account at Blogger's Blogger
						</Text>
					</View>

					<View style={styles.container}>
						<TextInput
							placeholder="Username"
					        autoCapitalize="none"
					        placeholderTextColor="#FFFFFF"
					        autoCorrect={false}
					        onChangeText={(username) => updateState({ username })}
					        style={styles.username}
					      />
						<TextInput
							placeholder="Email Address"
					        autoCapitalize="none"
					        placeholderTextColor="#FFFFFF"
					        autoCorrect={false}
					        onChangeText={(email) => updateState({ email })}
					        style={styles.main}
					      />
					     <TextInput
					     	placeholder="Password"
					     	autoCorrect={false}
					     	placeholderTextColor="#FFFFFF"
					     	autoCapitalize="none"
					     	onChangeText={(password) => updateState({password})}
					     	style={styles.pass}
					     />
					</View>
					
					<View style={styles.buttons}>
						<TouchableOpacity style={styles.button} onPress={createAccount}>
					      	<Text style={styles.buttonText} >
					        	Create Account
					      	</Text>
					    </TouchableOpacity>    
					</View>	
					<KeyboardSpacer />
				</View>
			</ScrollView>	
		</Image>
	);
};

export default SignUp;