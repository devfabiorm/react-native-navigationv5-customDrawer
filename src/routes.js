import React from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialIcons';

import CustomDrawerContent from './components/CustomDrawerContent';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const width = Dimensions.get('screen').width;

const Routes = () => {

    const Drawer = createDrawerNavigator();


    function CustomDrawer() {

        return (
            <Drawer.Navigator
                initialRouteName="Home"
                drawerStyle={{width: width * (2/3)}}
                drawerContentOptions={{activeTintColor: 'orange'}}
                drawerContent={props => <CustomDrawerContent {...props} />} 
            >
                <Drawer.Screen name="Home" component={HomeScreen} options={{
                    drawerIcon: ({focused, color, size}) => <Icon name="home" size={size} color={color} />
                }} />
                <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                drawerIcon: ({focused, color, size}) => <Icon name="settings" size={size} color={color} />
                }}
                />
            </Drawer.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <CustomDrawer />
        </NavigationContainer>
    );

}

export default Routes;