import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import MyButton from '../components/Button';
import TextInput from '../components/TextInput';
import firebase from '../../Firebase';

export default class App extends React.Component {
  state = {
    email: '',
    password: ''
  };
    static navigationOptions = {
        title: 'Service',
    };
    navigateToHospitals = () => {
      this.props.navigation.navigate('Hospitals')
    };
    navigateToClinics = () => {
      this.props.navigation.navigate('Clinics')
    };
    navigateToPharmacy = () => {
      this.props.navigation.navigate('Pharmacy')
    };



  render() {
    return (
      <View style={styles.container}>
          
          <TouchableOpacity  onPress = {this.navigateToHospitals}
          style={styles.but}
       >
        <Image
        style={{width: 20, height: 20,}}
          source={require('./Assets/hospital.png')}
        />
        <Text style={styles.text}>Hospitals</Text>  
        </TouchableOpacity>

            
          <TouchableOpacity  onPress = {this.navigateToClinics}
          style={styles.but}
       >
        <Image
        style={{width: 20, height: 20,}}
          source={require('./Assets/placeholder.png'
          )}
        />
        <Text style={styles.text}>Clinics</Text>  
        </TouchableOpacity>
    
        <TouchableOpacity  onPress = {this.navigateToPharmacy}
          style={styles.but}
       >
        <Image
        style={{width: 20, height: 20,}}
          source={require('./Assets/dispensary.png'

          )}
        />
        <Text style={styles.text}
        >Pharmacy</Text>  
        </TouchableOpacity>
       

           
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#964d4d',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',},
  Bu: {
    paddingBottom: 12,
    paddingTop: 12,
  },
  text: {
    paddingTop: 5,
    alignSelf: 'center',
    fontSize:20,
    fontWeight:'bold',
    color: '#fff',
  },
  img: {
    marginHorizontal: 10,
  },
  but:{
    backgroundColor: '#979797',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    left:30,
    width:300,
    borderColor:'black',
    borderWidth:1,
    borderRadius:12,
    
    marginVertical:30

  },
  con1:{
    flexDirection:'row'
  },
});