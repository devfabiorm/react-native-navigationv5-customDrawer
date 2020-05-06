import React from 'react';
import { View, StyleSheet } from 'react-native';

const Header = props => {

    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        padding: 5,
        height: 55,
        justifyContent: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#EEE'
    }
})