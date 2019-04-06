import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput} from 'react-native';
import MyButton from '../components/Button';




export default class Welcome extends React.Component {
    static navigationOptions = {
        title: 'Welcome',

    };
    
    
    navigateToHome = () => {
        this.props.navigation.navigate('Home')
      };
    
    

  render() {
    return (
      
        <View style={styles.container}>

<View style={styles.spa}>
        <Text style={styles.text}>Welcome  <Text style={styles.text1}>to this Application which will help you to provide a transport environment suitable for your health.   </Text>
</Text>
</View>
{/* <TouchableOpacity onPress = {this.navigateToHome}>
       <Text style={styles.text2}> Get Start</Text>
   </TouchableOpacity> */}
   <View style={styles.spa1}>
<TouchableOpacity onPress = {this.navigateToHome}><Text style={styles.tex}>Get Start</Text></TouchableOpacity>
   </View>
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
      //alignItems: 'center',
      //alignItems: 'stretch',
      //justifyContent: 'center',
      fontSize: 45,
      color:'#838384',

       marginVertical:30,
       marginHorizontal: 40,
       fontWeight: 'bold',
      },
      text1: {
        //alignItems: 'center',
        alignItems: 'stretch',
        //justifyContent: 'center',
        fontSize: 25,
        color:'white',
         marginVertical:-200,
         marginHorizontal: 40,
         fontWeight: 'bold',
        },
  
    button: {
      alignItems: 'center',
      backgroundColor: '#67BEFD',
      padding: 80,
      marginHorizontal: 80,
      paddingVertical: 20,
      justifyContent: 'center',
      marginVertical: 20,
      borderWidth:1,
      borderRadius:12,
      marginTop:-150,
     
      
      
  },
  text2: {
              alignItems: 'center',
              //alignItems: 'stretch',
              justifyContent: 'center',
              fontSize: 30,
              color: 'black',
               marginVertical:-100,
               marginHorizontal: 120,
               fontWeight: 'bold',
              },

              tex:{
                color:'black',
                fontSize: 30,
                marginHorizontal: 120,
                fontWeight: 'bold',
                marginVertical:60,
              },
              spa:{
                marginVertical:20
              },
              spa1:{
                //marginVertical:30
                marginTop:30
              }


});
