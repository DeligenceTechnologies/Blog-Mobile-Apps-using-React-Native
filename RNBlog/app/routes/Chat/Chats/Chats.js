/**************************************Chat react-native component view*********************************/
import React from 'react'
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Meteor, {MeteorComplexListView} from 'react-native-meteor';

import images from '../../../config/images';
import Loading from '../../../components/Loading';
import styles from './styles';

const Chats = (props) => {
	return (
		<Image 
			source={images.backGround}
			style={styles.backgroundImage}
			>
			<View>
				<Text style={styles.header}>
					Messages
				</Text>
			</View>
			<View>
				<MeteorComplexListView
			        contentContainerStyle={styles.list}
			        keyboardShouldPersistTaps={true}
			        elements={()=>{return Meteor.collection('users').find({_id:{$ne:Meteor.userId()}})}}
			        enableEmptySections={true}
			        renderRow={(user) =>
			        	<View style={styles.item}>
			        		<TouchableOpacity style={styles.chatTouch} onPress={() => props.onOpenChat(user)}>
			        			<View style={styles.dp}>
			        			{user.profile?
			        				<Image 
				        				source={user.profile.profilePic} 
										style={styles.chatDp}>
									</Image>
			        			:
			        				<Image 
				        				source={images.avatar} 
										style={styles.chatDp}>
									</Image>
			        			}
				        		</View>	
	
								<View style={styles.chatUser}>	
									<Text style={styles.chatButton}>{user.username}</Text>
									<Text style={styles.chatButton}>Tap to chat!!! </Text>
								</View>
								<View style={styles.availability}>	
								{user.session == 'available'?
									<Image
										source={images.available} 
										style={styles.chatAvailability}>
									</Image>
								:
									<Image
										source={images.unavailable} 
										style={styles.chatAvailability}>
									</Image>	
								}
								</View>
				        				      
							</TouchableOpacity>
			        	</View>
			        }
				/>
			</View>
		</Image>			
	)
}

export default Chats;