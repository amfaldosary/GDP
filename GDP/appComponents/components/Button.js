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
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,

        left:100,
        width:200,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 12,
    },

    textFont: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
});
