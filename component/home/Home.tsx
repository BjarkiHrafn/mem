import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Pressable,
} from 'react-native';
import ListItem from '../listItem/ListItem'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
    React.useEffect(() => {
      if (this.props.route.params) {
        //this.setState({ data: [...this.state.data, this.props.route.params] })
        this.props.navigation.popToTop()
      }
    }, [this.props.route.params]);
  }

  onCallbackAdd = (data) => {
    this.setState({ data: [...this.state.data, data] })
    this.props.navigation.popToTop()
  }

  onAdd() {
    this.props.navigation.navigate('Adding', { onAdd: this.onCallbackAdd.bind(this) })
  }

  onRandom() {
    if (this.state.data.length != 0) {
      var randomListIndex = Math.floor(Math.random() * this.state.data.length) + 1;
      this.setState({
        data: [...this.state.data, this.state.data[randomListIndex]]
      })
    }
  }

  onClear() {
      this.setState({
        data: [],
      })
  }

  renderList() {
    var listIsEmpty = this.state.data.length == 0
    var list = this.state.data.map((item, i) => <ListItem key = {i} title = {item.title} subtitle = {item.subtitle}/>)
    if (listIsEmpty) {
      return (<View style = {styles.emptyList}><Text style = {styles.emptyText}>Click "add" or "random" to create a list</Text></View>)
    } else {
      return (
        <View style = {styles.listContainer}>
          <ScrollView horizontal contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            {list}
          </ScrollView>
        </View>
      )
    }
  }

  render() {
    return (
      <View style = {styles.container}>
          {this.renderList()}
        <View style = {styles.emptyContainer}></View>
        <View style = {styles.addContainer}>
          <Pressable style = {styles.button} onPress = {this.onAdd.bind(this)}>
            <Text style={styles.text}>Add</Text>
          </Pressable>
          <Pressable style = {styles.button} onPress = {this.onRandom.bind(this)}>
            <Text style={styles.text}>Random</Text>
          </Pressable>
          <Pressable style = {styles.button} onPress = {this.onClear.bind(this)}>
            <Text style={styles.text}>Clear</Text>
          </Pressable>
        </View>
      </View>
    )
  }
}


 const styles = StyleSheet.create({
   container: {
    alignItems: 'center',
    flex: 1,
    //justifyContent: 'flex-start',
    backgroundColor: '#565657',
    paddingTop: 100,
   },
   emptyContainer: {
     flex: 3,
   },
   emptyList: {
     flex: 0.5,
     backgroundColor: 'black',
     justifyContent: 'center',
     width: '100%',
   },
   emptyText: {
     textAlign: 'center',
     color: 'white',
     fontStyle: 'italic',
     fontFamily: 'Arial',
     fontSize: 20
   },
   listContainer: {
     flex: 1,
     width: '100%',
     backgroundColor: 'black'
   },
   addContainer: {
     position: 'absolute',
     bottom: 100,
     flexDirection: 'row',
     justifyContent:'space-between'
   },
   button: {
     padding: 15,
     borderRadius: 4,
     elevation: 3,
     backgroundColor: 'black',
   },
   text: {
     fontSize: 16,
     lineHeight: 21,
     fontWeight: 'bold',
     letterSpacing: 0.25,
     color: 'white',
   },
 });

export default Home;
