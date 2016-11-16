/*********************************Chat messages react-native component view*****************************/
import React from 'react';
import {Text, TextInput, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import Meteor, {MeteorListView, MeteorComplexListView} from 'react-native-meteor';

import styles from './styles';
import images from '../../../config/images';

const ChatView = (props) => {
	const { user , updateState} = props;
	return(
		<Image
			source={images.backGround}
			style={styles.backgroundImage}
		>
			{props.chats?
				<ScrollView 
					ref={(scrollView) =>  this.scroller = scrollView}
			        automaticallyAdjustContentInsets={false}
			        onScroll={() => { console.log('onScroll!'); }}
			        scrollEventThrottle={200}
			        onScroll={props.handleScroll}
			        onLayout={props.handleLayout}
			        onContentSizeChange={props.handleContentChange}
			        >
				<MeteorComplexListView
					contentContainerStyle={styles.list}
			        keyboardShouldPersistTaps={true}
			        elements={()=>{return props.chats.talks}}
			        enableEmptySections={true}
			        renderRow={(chats) =>
			        	<View>
			        	{chats.sender==Meteor.user().username?
			        		<View style={styles.chatMessage}>
			        		<View style={styles.chatMessage1}>
			        			<Text style={styles.message}>{chats.sender}</Text>
			        			<Text style={styles.message}>{chats.chatMessage}</Text>
			        		</View>
			        		</View>	
			        	:
			        		<View style={styles.chatMessage2}>
			        			<Text style={styles.message}>{chats.sender}</Text>
			        			<Text style={styles.message}>{chats.chatMessage}</Text>
			        		</View>
			        	}		
			        	</View>
			        }	
				/>
				</ScrollView>
			:
				<View style={styles.noChat}>
        			<Text style={styles.chatButton}>No chats yet....</Text>
        		</View>
			}
			
			<View style={styles.msgEnter}>
				<TextInput
					placeholder="Enter your message......."
			        autoCapitalize="none"
			        autoCorrect={false}
			        ref={component => this.textInput = component}
			        onChangeText={(msg) => updateState({ msg })}
			        style={styles.main}
			    />
			    <TouchableOpacity
					onPress={props.submitChat}
					style={styles.enterButton}
				>
					<Text style={styles.chatButton}>Enter</Text>
				</TouchableOpacity>
			</View>	
		</Image>	
	)
}

export default ChatView;