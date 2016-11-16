/***************************************Sign In React-native component view********************************************/
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { MenuContext } from 'react-native-menu';

import TopNavigation from '../../../layouts/TopNavigation';
import Button from '../../../components/Button';
import images from '../../../config/images';
import styles from './styles';


const SignIn = (props) => {
	const {updateState, signIn, createAccount, error } = props;
	return (
		<Image 
			style={styles.backgroundImage}
       		source={images.backGround} >
       		<ScrollView 
				ref={(scrollView) =>  this.scroller = scrollView}
		        automaticallyAdjustContentInsets={false}
		        onScroll={() => { console.log('onScroll!'); }}
		        scrollEventThrottle={200}
		        keyboardShouldPersistTaps={true}
		        onScroll={props.handleScroll}
		        onLayout={props.handleLayout}
		        >
				<View>
					<View>
						<Text style={styles.header}>
							Sign In to Blogger's Blogger
						</Text>
					</View>

					<View style={styles.container}>
						<TextInput
							placeholder="Email Address"
					        autoCapitalize="none"
					        autoCorrect={false}
					        placeholderTextColor="#FFFFFF"
					        onChangeText={(email) => updateState({ email })}
					        style={styles.email}
					      />
					     <TextInput
					     	placeholder="Password"
					     	autoCorrect={false}
					     	autoCapitalize="none"
					     	placeholderTextColor="#FFFFFF"
					     	onChangeText={(password) => updateState({password})}
					     	style={styles.pass}
					     />
					</View>
					
					<View style={styles.buttons}>
						<TouchableOpacity style={styles.button} onPress={signIn}>
					      	<Text style={styles.buttonText} >
					        	Sign In
					      	</Text>
					    </TouchableOpacity>
					    <Text style={styles.or}>
					    	or
					    </Text>
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

export default SignIn;