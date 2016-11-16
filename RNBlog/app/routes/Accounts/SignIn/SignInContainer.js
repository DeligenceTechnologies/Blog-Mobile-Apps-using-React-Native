/*********************************Sign In react-native component & container*****************************/
import React, { Component } from 'react';
import { LayoutAnimation, Keyboard, Platform } from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';

import Routes from '../../../config/routes';
import SignIn from './SignIn';

class SignInContainer extends Component {
  constructor(props) {
    super(props);

    this.mounted = false;
    this.state = {
      email: '',
      password: '',
      error: null,
      contentHeight: null,
      scrollHeight: null,
      scrollY: null,
    };

    ;[
      'handleKeyboardShow', 'handleKeyboardHide',
      'handleLayout', 'handleScroll',
    ].forEach((method) => {
      this[method] = this[method].bind(this)
    })

    let scroller = null;
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
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
        }
        else {
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

  handleError(error) {
    if (this.mounted) {
      this.setState({ error });
    }
  }

  validInput() {
    const { email, password } = this.state;
    let valid = true;

    if (email.length === 0 || password.length === 0) {
      alert('Email and password cannot be empty.');
      valid = false;
    }

    if (valid) {
      this.handleError(null);
    }
    return valid;
  }

  handleSignIn() {
    if (this.validInput()) {
      const { email, password } = this.state;
      Meteor.loginWithPassword({email:email}, password, (err) => {
        if (err) {
          alert(err.reason);
        }
      });
      this.props.navigator.resetTo(Routes.getHomeRoute())
    }
  }

  render() {
    return (
      <SignIn
        updateState={this.setState.bind(this)}
        signIn={this.handleSignIn.bind(this)}
        createAccount={() => this.props.navigator.push(Routes.getSignUpRoute())}
        handleScroll={this.handleScroll.bind(this)}
        handleLayout={this.handleLayout.bind(this)}
        {...this.state}
      />
    );
  }
};

export default SignInContainer;
