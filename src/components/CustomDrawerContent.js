import React from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const CustomDrawerContent = props => {

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/profile.png')} style={{height: 120, width: 120, borderRadius: 60}} />
            </View>
            <DrawerContentScrollView>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
}

export default CustomDrawerContent;