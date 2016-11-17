# Deligence Technologies' Blog

#Overview 
Welcome to Deligence Technologies' Blog! The is a minimal blog app built using React Native with Meteor for android. This app provides with few functionalities of a blog and here we will go through the all the features provided by the app.

You can contact us at info [@] deligence.com in case of any doubt or query.

#Home

<h4 width="300">Logged in user</h4>
<img height="550" width="300" src="https://github.com/Shanky0009/react-native-blog/blob/master/RNBlog/app/images/overview/home1.png" /><h4 width="300">Logged out user</h4><img height="550" width="300" src="https://github.com/Shanky0009/react-native-blog/blob/master/RNBlog/app/images/overview/home2.png" />
<br>

#Sign In and create account

<h4>User Sign In</h4>
<img height="550" width="300" src="https://github.com/Shanky0009/react-native-blog/blob/master/RNBlog/app/images/overview/singIn.png" />   
<h4>User Create Account</h4>
<img height="550" width="300" src="https://github.com/Shanky0009/react-native-blog/blob/master/RNBlog/app/images/overview/signUp.png" />
<br>

#Top Navigation Menu

<h4>Menu for logged out user</h4>
<img height="550" width="300" src="https://github.com/Shanky0009/react-native-blog/blob/master/RNBlog/app/images/overview/menu1.png" />
<h4>Menu for logged in user</h4><img height="550" width="300" src="https://github.com/Shanky0009/react-native-blog/blob/master/RNBlog/app/images/overview/menu2.png" />
<br>

<h1>Blog View</h1>

<h4>All blogs view</h4>
<img height="550" width="300" src="https://github.com/Shanky0009/react-native-blog/blob/master/RNBlog/app/images/overview/blogs.png" />
<h4>One blog view with comments</h4><img height="550" width="300" src="https://github.com/Shanky0009/react-native-blog/blob/master/RNBlog/app/images/overview/oneBlog.png" /> <img height="550" width="300" src="https://github.com/Shanky0009/react-native-blog/blob/master/RNBlog/app/images/overview/oneBlog1.png" />
<br>

#Chat View

<h4>Online, offline user and chat view</h4>
<img height="550" width="300" src="https://github.com/Shanky0009/react-native-blog/blob/master/RNBlog/app/images/overview/chats.png" /> <img height="550" width="300" src="https://github.com/Shanky0009/react-native-blog/blob/master/RNBlog/app/images/overview/chats1.png" />
<br>

#Profile View

<h4>User profile view and profile update </h4>
<img height="550" width="300" src="https://github.com/Shanky0009/react-native-blog/blob/master/RNBlog/app/images/overview/pro1.png" /> <img height="550" width="300" src="https://github.com/Shanky0009/react-native-blog/blob/master/RNBlog/app/images/overview/pro2.png" />  <img height="550" width="300" src="https://github.com/Shanky0009/react-native-blog/blob/master/RNBlog/app/images/overview/pro3.png" />   <img height="550" width="300" src="https://github.com/Shanky0009/react-native-blog/blob/master/RNBlog/app/images/overview/pro4.png" />
<br>


#Getting Started

#Installing Dependencies 
 You will need Node.js, Meteor, the React Native command line interface, and Android Studio.

#Node

Follow the <a href="https://nodejs.org/en/download/package-manager/">installation instructions for your Linux distribution</a> to install Node.js 4 or newer.

#Meteor

Install Meteor to linux using following command 
<pre>$ curl https://install.meteor.com/ | sh</pre>

#React Native command line

Use npm package manager to install react-native-cli
<pre>$ npm install -g react-native-cli</pre>

#Android Studio

Download and install Android Studio from the following link.
<a href="https://developer.android.com/studio/install.html">https://developer.android.com/studio/install.html</a>

#Installation

#Meteor_Blog
 Run <pre>$ npm install</pre> inside the Meteor_Blog directory.

#RNBlog
 Run <pre>$ npm install</pre> inside the RNBlog directory.

#Running the application

## Running on Android Emulator

- Be sure your Meteor app is running: In the ```Meteor_Blog``` directory, type <pre>$ meteor</pre>
- Get the IP address of your machine
- In "RNBlog/app/config/settings.js" change "localhost" to your machine's IP address
- Make sure you have an emulator configured and running.
- From the "RNBlog" directory run <pre>$ react-native run-android</pre>

# Running on Android Device

- Be sure your Meteor app is running: In the ```MeteorApp``` directory, type 
  <pre>$ meteor</pre>
- Make sure [USB Debugging is enabled](https://facebook.github.io/react-native/docs/running-on-device-android.html#prerequisite-usb-debugging)
- Plug your device into your computer
- Run <pre>$ adb devices</pre> to make sure your device shows up
- Run <pre>$ adb reverse tcp:8081 tcp:8081</pre>
- In "RNApp/app/config/settings.js" change "localhost" in "METEOR_URL" to your computer's IP address (see note in "Running on Android" section on how to get your IP Address)
- Run <pre>$ react-native run-android</pre>

For further information please reference the [official docs](https://facebook.github.io/react-native/docs/running-on-device-android.html#content).

