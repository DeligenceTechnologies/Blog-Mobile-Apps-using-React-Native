/****************************Profile Update react-native component & container*****************************/
import React, { Component , PropTypes } from 'react';
import {Platform, Keyboard} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Meteor, { createContainer } from 'react-native-meteor';

import Routes from '../../../config/routes';
import ProfileUpdate from './ProfileUpdate';

class ProfileUpdateContainer extends Component{
	constructor(props){
		super(props);
		this.state={
			profilePic:this.props.profile.profilePic,
			firstName:'',
			lastName:'',
			address:'',
			phnNo:'',
			contentHeight: null,
		    scrollHeight: null,
		    scrollY: null,
		}

	    ;[
	        'handleKeyboardShow', 'handleKeyboardHide',
	        'handleLayout', 'handleScroll',
	    ].forEach((method) => {
	        this[method] = this[method].bind(this)
	    })

	    let scroller = null;
	}

	componentDidMount () {
	      Keyboard.addListener('keyboardDidShow', this.handleKeyboardShow);
	      Keyboard.addListener('keyboardDidHide', this.handleKeyboardHide);
	}
	  
	componentWillUnmount () {
	    Keyboard.removeListener('keyboardDidShow', this.handleKeyboardShow);
	    Keyboard.removeListener('keyboardDidHide', this.handleKeyboardHide);
	}

	handleKeyboardShow () {
	    this.scrollToBottom();
	}
	  
	handleKeyboardHide () {
	    const { scrollY, scrollHeight, contentHeight } = this
	    if (Platform.OS === 'ios') {
	        if (scrollY > contentHeight - scrollHeight) {
	            scroller.scrollTo({ y: 0 });
	        } else {
	            scroller.scrollTo({ y: scrollY });
	        }
	    }
	}

	handleScroll (e) {
	    this.scrollY = e.nativeEvent.contentOffset.y;
	}
	
	handleLayout (e) {
	    this.scrollHeight = e.nativeEvent.layout.height;
	}

	scrollToBottom () {
	    const { scrollHeight, contentHeight } = this;
	    if (scrollHeight == null) {
	        return
	    }
	    if (contentHeight > scrollHeight) {
	        scroller.scrollTo({ y: contentHeight - scrollHeight });
	    }
	}


	uploadPress(){
		var options = {
			title: 'Photo Picker',
		    takePhotoButtonTitle: 'Take Photo...',
		    chooseFromLibraryButtonTitle: 'Choose from Library...',
		    quality: 0.5,
		    maxWidth: 300,
		    maxHeight: 300,
		    allowsEditing: true,
		    storageOptions: {
		    	skipBackup: true
			}
		};

		ImagePicker.showImagePicker(options, (response)  => {

			  if (response.didCancel) {
			    console.log('User cancelled image picker');
			  }
			  else if (response.error) {
			    console.log('ImagePicker Error: ', response.error);
			  }
			  else if (response.customButton) {
			    console.log('User tapped custom button: ', response.customButton);
			  }
			  else {
			    const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

			    if (Platform.OS === 'ios') {
			      const source = {uri: response.uri.replace('file://', ''), isStatic: true};
			    } else {
			      const source = {uri: response.uri, isStatic: true};
			    }

			    this.setState({
			      profilePic: source
			    });
			    
			  }
		});
	} 

	

	onProfileUpdatePress(event){
		event.preventDefault();
	 	Meteor.call('users.profileUpdate', this.state, (err) => {
	 		if(err)
	 			alert(err.reason);
	 		else
	 			this.props.navigator.resetTo(Routes.getProfileViewRoute());
	 	});
	}

	componentWillReceiveProps(nextProps){
		if(this.props.profile){
			this.setState(this.props.profile);	
		}
	}

	shouldComponentUpdate(nextProps, nextState){
		if(nextProps.profile.profilePic != nextState.profilePic){
			this.setState({profile:nextState.profilePic})
			return true;
		} else {
			return false;
		}
	}

	render(){
		
		return(
			<ProfileUpdate 
				onProfileUpdatePress={this.onProfileUpdatePress.bind(this)}
				updateState={this.setState.bind(this)}
				profilePic={this.setState.bind(this)}
				uploadPress={this.uploadPress.bind(this)}
				profile={this.props.profile}
				handleScroll={this.handleScroll.bind(this)}
		        handleLayout={this.handleLayout.bind(this)}
				{...this.state}
			/>	
		)
	}
}

export default createContainer(()=>{
	
	Meteor.subscribe('users');

	if(Meteor.user().profile){
		profile=Meteor.user().profile;
	} else {
		profile='';
	}

	return {
		profile:profile
	}
}, ProfileUpdateContainer)