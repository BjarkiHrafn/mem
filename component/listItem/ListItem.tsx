import * as React from "react";
import { View, Button, Text, StyleSheet, Pressable, Animated } from "react-native";

class ListItem extends React.Component {
  constructor(props){
   super(props);
   this.state = {
        title: props.title,
        subtitle: props.subtitle,
     }
  }

  goToDetail() {
    const navigation = useNavigation();
    this.props.navigation.navigate('Detail', { title: this.state.title, subtitle: this.state.subtitle })
  }

  render() {
    return (
      <View style = {styles.container}>
        <Pressable  onPress = {this.goToDetail.bind(this)}>
          <View style = {styles.icon}>
            <Text style = {styles.iconLetter}>
              {this.state.title[0].toUpperCase()}
            </Text>
          </View>
          <View style = {styles.infoContainer}>
            <Text style = {styles.title}>
              {this.state.title}
            </Text>
            <Text style = {styles.subtitle}>
              {this.state.subtitle}
            </Text>
          </View>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    backgroundColor: '#4d4b49',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    width: 100,
    height: 100,
  },
  iconLetter: {
    color: 'white',
    fontSize: 25
  },
  infoContainer: {
    padding: 10

  },
  title: {
    color: "#c2c2c4",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  },
  subtitle: {
    color: "#c2c2c4",
    textAlign: "center",
    fontSize: 16,
  },
});

export default ListItem;
