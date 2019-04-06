import React from 'react';
import { StyleSheet, Text, View ,Header,TouchableOpacity} from 'react-native';
import {Icon, Button, ListItem, Drawer} from 'native-base';
import AlertPro from "react-native-alert-pro";

import CountdownCircle from 'react-native-countdown-circle'

import { Menu, MenuProvider,MenuOption} from 'react-native-popup-menu';
import {StackNavigator} from 'react-navigation'
import MapView from 'react-native-maps'

import MenuButton from '../components/MenuButton'
import MyButton from '../components/Button';
import TextInput from '../components/TextInput';
import firebase from '../../Firebase';

export default class App extends React.Component {
    static navigationOptions = (context) => ({
        title: 'Home',
        headerRight: (

            <Button transparent 
            >
            
            <Icon name='md-help'   onPress={() => context.navigation.navigate("Help")} />
            </Button>  

        )

    });
    navigateToService = () => {
      this.props.navigation.navigate('Service')

     
    };
    navigateToHelp = () => {
      this.props.navigation.navigate('Help')
    };
    emergency = () => {
     alert('wait');


     <AlertPro
     ref={ref => {
       this.AlertPro = ref;
     }}
     onConfirm={() => this.AlertPro.close()}
     title="Delete confirmation"
     message="Are you sure to delete the entry?"
     textCancel="Cancel"
     textConfirm="Delete"
     customStyles={{
       mask: {
         backgroundColor: "transparent"
       },
       container: {
         borderWidth: 1,
         borderColor: "#9900cc",
         shadowColor: "#000000",
         shadowOpacity: 0.1,
         shadowRadius: 10
       },
       buttonCancel: {
         backgroundColor: "#4da6ff"
       },
       buttonConfirm: {
         backgroundColor: "#ffa31a"
       }
     }}
   

/> 


    };

  time =() => {

    <CountdownCircle
seconds={10}
radius={30}
borderWidth={8}
color="#ff003f"
bgColor="#fff"
textStyle={{ fontSize: 20 }}
onTimeElapsed={() => console.log('Elapsed!')}
/> 
  }


  render() {
    return (

      
      <View style={styles.container}>


<MenuButton navigation={this.props.navigation} />
        <Text style={styles.text}>Home</Text>

        <MapView style={styles.map}
          followsUserLocation
          showsUserLocation>

        </MapView>
        


    <CountdownCircle
seconds={10}
radius={30}
borderWidth={8}
color="#ff003f"
bgColor="#fff"
textStyle={{ fontSize: 20 }}
onTimeElapsed={() => console.log('Elapsed!')}
/> 
        <AlertPro
          ref={ref => {
            this.AlertPro = ref;

          }}

          onConfirm={() => this.AlertPro.close()}
          title="Are you sure to Continue ?"
          //message="Are you sure to Continue ?"
          textCancel="Cancel"
          textConfirm="OK"
          customStyles={{
            mask: {
              backgroundColor: "transparent"
            },
            container: {
              borderWidth: 1,
              borderColor: "black",
              shadowColor: "#000000",
              shadowOpacity: 0.1,
              shadowRadius: 10
            },
            buttonCancel: {
              backgroundColor: "#979797"
            },
            buttonConfirm: {
              backgroundColor: "black"
            }
          }}
        />

        <View style={styles.spa}>
          <View style={styles.con1}>
          <TouchableOpacity onPress={this.navigateToService}
          style={styles.but}>
          <View>
            <Text style={styles.text}>Service</Text>
          </View>
          
          </TouchableOpacity>
          <TouchableOpacity onPress={this.emergency}
             onPress={() => this.AlertPro.open()}
             //onPress={() => this.time}
          style={styles.but}>
          <View>
            <Text style={styles.text}>Emergncy</Text>
          </View>
          
          </TouchableOpacity>
          
          </View>


      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    alignSelf: 'center',
    color:'#fff',
    fontWeight:'bold',
    fontSize:20,
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },
  button1: {
    flex: 2,
    position: 'absolute',
    bottom: '10%',
    width: '100%',
  },
  button2: {
    position: 'absolute',
    bottom: '10%',
    width: '100%',
  },
  but:{
    backgroundColor: '#964d4d',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    //left:100,
    width:300,
    borderColor:'black',
    borderWidth:1,
    borderRadius:12,

  },
  con1:{
    flexDirection:'column'
  },
  spa:{
    marginTop:450
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  },
});
