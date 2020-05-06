import React from 'react';
import { View, StyleSheet } from 'react-native';

const Left = props => {

    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

export default Left;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    }
})