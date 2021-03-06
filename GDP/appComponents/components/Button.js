import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const myButton = (props) => {
    return (
        <TouchableOpacity style={styles.Button} onPress={props.onPress}>
            <Text style={styles.textFont}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}

export default myButton;

const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#979797',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    textFont: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
});