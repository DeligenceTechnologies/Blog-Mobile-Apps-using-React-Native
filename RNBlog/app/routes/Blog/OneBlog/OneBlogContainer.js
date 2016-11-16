import React, { Component, PropTypes } from 'react';
import Meteor, { createContainer, Accounts } from 'react-native-meteor';
import { Keyboard, Platform } from 'react-native';

import Routes from '../../../config/routes';
import OneBlog from './OneBlog';

class OneBlogContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      // oneBlog: '',
      comment:'',
      flag:false
    };
    ;[
      'handleKeyboardShow', 'handleKeyboardHide',
      'handleLayout', 'handleScroll',
    ].forEach((method) => {
      this[method] = this[method].bind(this)
    })

    let scroller = null;
    this.onDeleteBlogPress = this.onDeleteBlogPress.bind(this);
    this.onCommentBlogPress = this.onCommentBlogPress.bind(this);
    this.onDeleteCommentPress = this.onDeleteCommentPress.bind(this);
    textInput = null;
  }

  componentDidMount () {
    Keyboard.addListener('keyboardDidShow', this.handleKeyboardShow)
    Keyboard.addListener('keyboardDidHide', this.handleKeyboardHide)
  }
  
  componentWillUnmount () {
    Keyboard.removeListener('keyboardDidShow', this.handleKeyboardShow)
    Keyboard.removeListener('keyboardDidHide', this.handleKeyboardHide)
  }

  handleKeyboardShow () {
    this.scrollToBottom()
  }
  
  handleKeyboardHide () {
    const { scrollY, scrollHeight, contentHeight } = this

    if (Platform.OS === 'ios') {
        if (scrollY > contentHeight - scrollHeight) {
          scroller.scrollTo({ y: 0 })
        } else {
          scroller.scrollTo({ y: scrollY })
      }
    }
  }

  handleScroll (e) {
    this.scrollY = e.nativeEvent.contentOffset.y
  }
  handleLayout (e) {
    this.scrollHeight = e.nativeEvent.layout.height
  }

  scrollToBottom () {
    const { scrollHeight, contentHeight } = this
    if (scrollHeight == null) {
      return
    }
    if (contentHeight > scrollHeight) {
      scroller.scrollTo({ y: contentHeight - scrollHeight })
    }
  }

  onDeleteBlogPress(id){
    if(Meteor.userId()){
      Meteor.call('blogs.remove', id, function(err){
        if(err){
          alert(err.error)
        }
      });
      this.props.navigator.push(Routes.getBlogRoute())
    }
  }

  onCommentBlogPress(id){
    let blogOwner = Meteor.collection('blogs').findOne({_id:id}).owner;
    if(Meteor.userId() && this.state.comment != ''){
      Meteor.call('blogs.comment', this.state.comment, id, blogOwner, Meteor.userId(), Meteor.user().username, function(err){
        if(err){
          alert(err.error)
        }
      });
      this.setState({flag:true})
      textInput.setNativeProps({text: ''});
    }
  }

  onDeleteCommentPress(blogId, commentId){
    let blogOwner = Meteor.collection('blogs').findOne({_id:blogId}).owner;
    if(Meteor.userId()){
      Meteor.call('blogs.removeComment', blogId, commentId, blogOwner, Meteor.userId(), function(err){
        if(err){
          alert(err.error)
        }
      });
      this.setState({flag:true})
    }
  }

  onUserProPress(id){
    this.props.navigator.push(Routes.getProfileViewRoute(id))
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.state.flag){
      this.setState({oneBlog:nextProps})
      this.setState({flag:false})
      return true
    }else{
      return false
    }
  }

  render(){
      return (
      <OneBlog
        onAddBlogPress={() => this.props.navigator.push(Routes.getAddBlogRoute())}
        onDeleteBlogPress={(id) => this.onDeleteBlogPress(id)}
        onCommentBlogPress={(id) => this.onCommentBlogPress(id)}
        onDeleteCommentPress={(blogId, commentId) => this.onDeleteCommentPress(blogId, commentId)}
        oneBlog={Meteor.collection('blogs').findOne({_id:this.props.blogId})}
        onUserProPress={(id) => this.onUserProPress(id)}
        updateState={this.setState.bind(this)}
        currentUser={this.props.currentUser}
        handleScroll={this.handleScroll.bind(this)}
        handleLayout={this.handleLayout.bind(this)}
        {...this.state}
      />
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('blogs');

  if(!Meteor.user()){
    user = '';
  } else {
    user = Meteor.user()
  }
  return {
    currentUser: user,
  };
}, OneBlogContainer);