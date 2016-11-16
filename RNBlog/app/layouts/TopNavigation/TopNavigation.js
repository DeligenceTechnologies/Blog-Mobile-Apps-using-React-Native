/************************************Layout for the top navigation bar***********************************/
import React, { PropTypes } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Meteor , { createContainer }  from 'react-native-meteor';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

import styles from './styles';
import Routes from '../../config/routes';

const TopNavigationContainer = (props) => {
    return(
        <View style={{ padding: 10, flexDirection: 'row', backgroundColor: 'black' }}>
            <View style={{ flex: 1}}>
                <Text style={{ color:"#FFFFFF" }} onPress={props.onHomePress}>
                    Deligence Technologies Blog!!
                </Text>
            </View>
            <Menu onSelect={this.setMessage}>
                <MenuTrigger style={styles.menuTrigger}>
                    <Text style={styles.menuTriggerText}>&#8942;</Text>
                </MenuTrigger>
                <MenuOptions style={styles.menuOptions}>
                    <MenuOption value="normal">
                        <Text onPress={props.onHomePress}>Home</Text>
                    </MenuOption>
                    <MenuOption value="normal">
                        <Text onPress={props.onBlogPress}>Blogs</Text>
                    </MenuOption>
                      
                    {Meteor.user()?
                        <View>
                            <MenuOption value="normal">
                                <Text onPress={props.onProfileViewPress}>Profile</Text>
                            </MenuOption>
                            <MenuOption value="normal">
                                <Text onPress={props.onProfileUpdatePress}>Profile Update</Text>
                            </MenuOption>
                            <MenuOption value="normal">
                                <Text onPress={props.onChatsPress}>Chats</Text>
                            </MenuOption>
                            <View style={styles.divider}/>
                            <MenuOption value="normal">
                               <Text onPress={props.onLogoutPress}>Logout</Text>
                            </MenuOption>
                        </View>  
                    :
                        <View>
                            <View style={styles.divider}/>
                            <MenuOption value="normal">
                               <Text onPress={props.onSignInPress}>Sign In</Text>
                            </MenuOption>
                        </View>
                    }
                </MenuOptions>
            </Menu>
        </View>
    );
};



const TopNavigation = (props) => {
    return (
        <TopNavigationContainer
            onHomePress={() => props.navigator.resetTo(Routes.getHomeRoute())} 
            onBlogPress={() => props.navigator.resetTo(Routes.getBlogRoute())}
            onChatsPress={() => props.navigator.resetTo(Routes.getChatsRoute())}
            onProfileViewPress={() => props.navigator.resetTo(Routes.getProfileViewRoute())}
            onProfileUpdatePress={() => props.navigator.resetTo(Routes.getProfileUpdateRoute())}
            onSignInPress={() => props.navigator.resetTo(Routes.getSignInRoute())}
            onLogoutPress={() => props.navigator.resetTo(Routes.getLogoutRoute())}
        />  
    );
};

TopNavigation.propTypes = {
    navigator: React.PropTypes.object,
};

export default TopNavigation;