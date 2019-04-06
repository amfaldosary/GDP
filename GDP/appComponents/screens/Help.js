import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import MenuButton from '../components/MenuButton'


import { Container, Content, Accordion, Header, Drawer} from "native-base";
const dataArray = [
  { title: "How To Get Transefer ?", content: "Go To Home Screen Then Choose Service If Your stable State or Choose Emergency If your Critical State. " },
  { title: "How To Get Emergency service ?", content: "Go To Home Screen Then Press on Emergency After that Will Send Your Request Directly To Nearest Driver." },
  { title: "How To Service ", content: "Lorem ipsum dolor sit amet" },
  { title: "How To Change Your Information ?", content: "Go To Your Profile Then Update Currently Your Information." },
  { title: "How To Find ", content: "Lorem ipsum dolor sit amet" },
  { title: "How To Rate Service? ", content: "After Any Services Press Done !             Then You Will be Taken To Rate Screen." },
];
export default class App extends Component {

    static navigationOptions = {
        title: 'Help',
       
    }
    
  render() {
    return (
     
     <Container>
     
     <View style={styles.container}>
        <Content style={styles.Down} padder>
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#979797" }}
            contentStyle={{ backgroundColor: "#fff" }}
          />




        </Content>
        </View>
      </Container>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  Down:{
    marginVertical:100,
  },
});
