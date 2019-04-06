import React from 'react';
import StarRating from 'react-native-star-rating';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../components/MenuButton'
class App extends React.Component {
  static navigationOptions = {
    title: 'Rate',
};
 
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3
    };
  }
 
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
 
  render() {
    return (

      <View style={styles.container}>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />

      
      <MenuButton navigation={this.props.navigation} />
      <Text style={styles.text}>Links</Text>
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
    fontSize: 30,
  }
});
export default App
