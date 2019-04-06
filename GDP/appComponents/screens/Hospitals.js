import React from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity, ScrollView, Button} from 'react-native';
import {connect} from 'react-redux';
import firebase from '../../Firebase';
import MyButton from '../components/Button';

class Hospitals extends React.Component {
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
      console.log("###########");
      console.log("Fetch from firebase #_#");
      console.log("###########");
      var hospitalsArray = [];
        console.log(snapshot.numChildren())
        snapshot.forEach((item) => {
            hospitalsArray.push(item.val())
         });
         console.log(hospitalsArray.length);
         this.setState({hospitals: hospitalsArray, loaded: true})
       })
       .catch(error => console.log('#####################', error))
    };

    passingToOrder = (item) => {
      console.log(item);
      firebase.database().ref('order/002').set({
        user_id: 'Hospital',
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
          <MyButton onPress={()=> this.passingToOrder(item)}>{item.name}</MyButton>
        </View>
      )
    }
    
    render() {
        return (
            <ScrollView style={styles.container}>
                <FlatList
                  data={this.state.hospitals}
                  renderItem={({item}) => this.renderListItem(item)}
                  keyExtractor={(item, index) => item.name}
                />
            </ScrollView>
        );
      }
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eff',
    },
    text: {
      paddingTop: 5,
      alignSelf: 'center',
    },
  });


  const mapStateToProps = state => {
    console.log(state);
    return {user: state.user};
  }
  
  export default connect(mapStateToProps)(Hospitals);