import React from 'react';
import { StyleSheet, Text, View, Platform, TouchableWithoutFeedback } from 'react-native';

import Header from '../components/Header';
import Left from '../components/Left';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Header>
                <Left>
                    <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
                        <Icon name={Platform.OS === 'ios' ? 'ios-menu' : "md-menu"} size={27} />
                    </TouchableWithoutFeedback>
                </Left>
            </Header>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>HomeScreen</Text>
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    }
})