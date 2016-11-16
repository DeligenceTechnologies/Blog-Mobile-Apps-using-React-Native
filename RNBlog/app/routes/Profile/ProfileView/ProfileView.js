/****************************Profile View react-native component view*****************************/
import React from 'react';
import {Text, View, Image} from 'react-native';
import Meteor from 'react-native-meteor';

import images from '../../../config/images';
import styles from './styles';

const ProfileView = (props) => {
	const {profile} = props;
	return (
		<Image
			style={styles.backgroundImage}
			source={images.backGround}>
			{profile?
				<View style={styles.container}>
					<View style={styles.profilePicView}>
						<Image source={profile.profilePic}
						style={styles.profilePic}
						/>
					</View>
					<View style={styles.profileContent}>
						<View>
							<Text style={styles.name}>
								{profile.firstName} {profile.lastName}
							</Text>
						</View>		
						<View style={styles.content1}>
							<Text style={styles.main}>
								{profile.firstName}
							</Text>
							<Text style={styles.main}>
								{profile.lastName}
							</Text>
							<Text style={styles.main}>
								{profile.address}
							</Text>
							<Text style={styles.main}>
								{profile.phnNo}
							</Text>
						</View>
						<View style={styles.content2}>
							<Text style={styles.label}>	
								: First Name 
							</Text>
							<Text style={styles.label}>	
								: Last Name
							</Text>
							<Text style={styles.label}>	
								: Address
							</Text>
							<Text style={styles.label}>	
								: Phone No
							</Text>
						</View>
					</View>	
				</View>		
			:
				<View style={styles.container}>
					<Text style={styles.noPro}>
						No Profile to display, please update your Profile..!!!
					</Text>
				</View>			
			}
		</Image>	
	)
}

export default ProfileView;