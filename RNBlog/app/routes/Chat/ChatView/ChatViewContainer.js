/*********************************Chat messages react-native component & container*****************************/
import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import { Keyboard, Platform } from 'react-native'

import ChatView from './ChatView';

class ChatViewContainer extends Component{
	constructor(props){
		super(props)
		this.state={
			msg:'',
			contentHeight: null,
		    scrollHeight: null,
		    scrollY: null,
		}

	    ;[
	      'handleKeyboardShow', 'handleKeyboardHide',
	      'handleLayout', 'handleContentChange', 'handleScroll',
	    ].forEach((method) => {
	      this[method] = this[method].bind(this);
	    })

	    let scroller = null, textInput = null;
	}

	submitChat(){
		currentUser = Meteor.user();
          user = this.props.user;
          message = this.state.msg;
         
          Meteor.call('users.chat', message, user, currentUser , function(err){
            if(err){
              alert(err.reason);
            }
          });
        this.setState({msg:''});
        textInput.setNativeProps({text: ''});
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

	handleContentChange (w, h) {
	    if (h === this.contentHeight) return
	    this.contentHeight = h;

	    if (this.scrollHeight == null) {
	      setTimeout(() => {
	        this.scrollToBottomIfNecessary();
	      }, 500)
	    }
	    else {
	      this.scrollToBottomIfNecessary();
	    }
	}

	scrollToBottomIfNecessary () {
	    this.scrollToBottom();
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

	shouldComponentUpdate(nextProps, nextState){
		if(this.state!=nextState){
			this.setState(nextState)
			return true
		} else {
			return false
		}
	}

	render(){
		return(
			<ChatView 
				user={this.props.user}
				chats={Meteor.collection('chats').findOne({ _id: { $in: [this.props.user._id+Meteor.userId(), Meteor.userId()+this.props.user._id] } })}
				submitChat={this.submitChat.bind(this)}
				updateState={this.setState.bind(this)}
				handleScroll={this.handleScroll.bind(this)}
		        handleLayout={this.handleLayout.bind(this)}
		        handleContentChange={this.handleContentChange.bind(this)}
				{...this.state}
			/>	
		)
	}
}

export default createContainer(() => {
	Meteor.subscribe('users');
	var chatHandle = Meteor.subscribe('chats');
	
	return {
		chatHandle:chatHandle.ready(),
	}
}, ChatViewContainer);