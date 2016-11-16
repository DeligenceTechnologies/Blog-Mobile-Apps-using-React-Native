import React, { Component, PropTypes } from 'react';
import Meteor, { createContainer, Accounts } from 'react-native-meteor';
import { Keyboard, Platform } from 'react-native';

import Routes from '../../../config/routes';
import Blog from './Blog';

class BlogContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      oneBlog: '',
      comment:'',
      flag:true,
    };

    this.onDeleteBlogPress = this.onDeleteBlogPress.bind(this);
  }

  onDeleteBlogPress(id){
    if(Meteor.userId()){
      Meteor.call('blogs.remove', id, function(err){
        if(err){
          alert(err.error);
        }
      });
      this.props.navigator.push(Routes.getBlogRoute());
    }
  }

  onOneBlogPress(id){
    this.props.navigator.resetTo(Routes.getOneBlogRoute(id))
  }

  onUserProPress(id){
    this.props.navigator.push(Routes.getProfileViewRoute(id))
  }

  render(){
      return (
      <Blog
        onAddBlogPress={() => this.props.navigator.push(Routes.getAddBlogRoute())}
        onDeleteBlogPress={(id) => this.onDeleteBlogPress(id)}
        onOneBlogPress={(id) => this.onOneBlogPress(id)}
        onUserProPress={(id) => this.onUserProPress(id)}
        updateState={this.setState.bind(this)}
        blogData={this.props.blogData}
        currentUser={this.props.currentUser}
        {...this.state}
      />
    );
  }
}

BlogContainer.propTypes = {
  blogData: PropTypes.bool,
};

export default createContainer(() => {
  blogData = Meteor.subscribe('blogs');

  if(!Meteor.user()){
    user = '';
  } else {
    user = Meteor.user()
  }
  return {
    blogData: blogData.ready(),
    currentUser: user,
  };
}, BlogContainer);