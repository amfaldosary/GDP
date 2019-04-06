import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

const myTextInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                autoCapitalize={"none"}
                autoCorrect={false}
                onChangeText={props.onChangeText}
            />
       </View>
    );
}

export default myTextInput;


const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '100%',
    },
    textInput: {
        backgroundColor: '#fff',
        height: 35,
        width:250,
        left:70,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15,
        fontSize: 14,
        borderRadius:12,
    },
   });