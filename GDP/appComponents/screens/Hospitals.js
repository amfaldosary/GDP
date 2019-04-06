import React from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity, ScrollView, Button} from 'react-native';

import firebase from '../../Firebase';
import MyButton from '../components/Button';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Hospitals',
};
    constructor(props) {
      super(props);
      this.state = {
        hospitals: [],
        loaded: false
      };

      this.getValue()
    }
    getValue = () => {
      firebase.database().ref('location/hospital/').once('value')
      .then((snapshot) => {
      var hospitalsArray = [];
  
       snapshot.forEach((item) => {
            hospitalsArray.push(item.val())
         });
         this.setState({hospitals: hospitalsArray, loaded: true})
       })
       .catch(error => console.log('#####################', error))
    };

    passingToOrder = (item) => {
      firebase.database().ref('order/').set({
        user_id: '',
        Destination: item.name,
        PICKUP_long: item.long,
        PICKUP_lat: item.lat,
      }).then(() => {
        console.log('####### passed');
      });
    };
    renderListItem = (item) => {
      console.log('################## MHA ITEM', item)
      return (
        <View>
          <MyButton onPress={this.passingToOrder(item)}>{item.name}</MyButton>
        </View>
      )
    }
    navigateToRate = () => {
      this.props.navigation.navigate('Rate')
    };
    render() {
        return (
            <View style={styles.container}>
        
                <FlatList
                  data={this.state.hospitals}
                  renderItem={({item}) => this.renderListItem(item)}
                  keyExtractor={(item, index) => item.name}
                 
                /> 
                
                <TouchableOpacity onPress={this.navigateToRate} style={styles.but} > 
           <Text>Rate</Text>
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
    text: {
      paddingTop: 5,
      alignSelf: 'center',
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

    Bu: {
      paddingBottom: 12,
      paddingTop: 12,
    },

    sp:{

      marginTop:50,
    },

  });