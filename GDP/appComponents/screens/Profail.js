import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,  Image} from 'react-native';

import MyButton from '../components/Button';
import TextInput from '../components/TextInput';
import { ScrollView } from 'react-native-gesture-handler';




export default class App extends React.Component {
    static navigationOptions = {
        title: 'Profail',
    };
    render() {
        return (
    <View style={styles.container}>

<View >
<Image style={styles.image} source={require('../../assets/framed-portrait.png')}/>
   </View>
<View >
<Text style={styles.vi} style={styles.text}>Name:</Text>
<View style={styles.textInput}>
<TextInput></TextInput> 
</View>
</View>

   
<View>
<Text style={styles.vi} style={styles.text}>National Id:</Text>
<View style={styles.textInput}>
<TextInput ></TextInput> 
</View></View>

<View>
<Text style={styles.text}>Phone Number:</Text>
<View style={styles.textInput}>
<TextInput ></TextInput> 
</View></View>

<View>
<Text style={styles.text}>State:</Text>
<View style={styles.textInput}>
<TextInput ></TextInput> 
</View></View>

</View>

     
  
   
        );}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#964d4d',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  text: {
    //paddingTop: 0,
      //alignSelf: 'center',
      width: '80%',
      fontSize: 20,
      color: '#fff',
      marginHorizontal:10,
      marginTop:40, 
      fontWeight: 'bold',
  },

textInput: {
    backgroundColor: '#fff',
    height: 44,
    width: 300,
    //borderColor: 'gray',
    //borderWidth: 1,
    marginHorizontal:10,
    //marginBottom: 15,
    borderRadius: 12,
    
},
    vi:{
        
        marginTop: 40,
       
    },

   image:{
       width:120,
       height:120,
       left: 120,
    
       
   },  
});
