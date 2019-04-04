import React from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity, ScrollView, Button} from 'react-native';
import {connect} from 'react-redux';
import firebase from '../../Firebase';
import MyButton from '../components/Button';

class Pharmacies extends React.Component {
  static navigationOptions = {
    title: 'Pharmacies',
};
    constructor(props) {
      super(props);
      this.state = {
        Pharmacies: [],
        loaded: false
      };

      this.getValue()
    }
    getValue = () => {
      firebase.database().ref('location/pharmacy/').once('value')
      .then((snapshot) => {
      var PharmaciesArray = [];
  
       snapshot.forEach((item) => {
        PharmaciesArray.push(item.val())
         });
         this.setState({Pharmacies: PharmaciesArray, loaded: true})
       })
       .catch(error => console.log('#####################', error))
    };

    renderListItem = (item) => {
      console.log('################## MHA ITEM', item)
      return (
        <View>
          <MyButton onPress={()=> this.passingToOrder(item)}>{item.name}</MyButton>
        </View>
      )
    }
    
    passingToOrder = (item) => {
      firebase.database().ref('order/').set({
        user_id: this.props.user.email,
        Destination: item.name,
        PICKUP_long: item.long,
        PICKUP_lat: item.lat,
      }).then(() => {
        console.log('####### passed');
      });
    };
    render() {
        return (
            <ScrollView style={styles.container}>
                <FlatList
                  data={this.state.Pharmacies}
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
  
  export default connect(mapStateToProps)(Pharmacies);