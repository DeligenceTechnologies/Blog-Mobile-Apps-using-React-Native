/*********************************Add Blog react-native component & container*****************************/
import React, { Component } from 'react';
import { LayoutAnimation, Keyboard, Platform } from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import Routes from '../../../config/routes';
import AddBlog from './AddBlog';

export default class AddBlogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      contentHeight: null,
      scrollHeight: null,
      scrollY: null,
    };

    ;[
        'handleKeyboardShow', 'handleKeyboardHide',
        'handleLayout', 'handleScroll',
    ].forEach((method) => {
      this[method] = this[method].bind(this);
    });

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
      const { scrollY, scrollHeight, contentHeight } = this;
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

  handleAddBlog() {    
    const { title, content } = this.state;
    Meteor.call('blogs.addEdit', title, content, Meteor.userId(), function(err){
      alert(err);
    });
    this.props.navigator.resetTo(Routes.getBlogRoute());
  }


  render() {
    return (
      <AddBlog
        updateState={this.setState.bind(this)}
        addBlog={this.handleAddBlog.bind(this)}
        handleScroll={this.handleScroll.bind(this)}
        handleLayout={this.handleLayout.bind(this)}
        {...this.state}
      />
    );
  }
};
