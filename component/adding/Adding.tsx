import React from 'react';
import titles from '../../entities/titles';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput
} from 'react-native';

const Adding = ({ route, navigation }) => {

  const [title, onChangeTitle] = React.useState(null);
  const [subtitle, onChangeSubtitle] = React.useState(null);

  return (
    <SafeAreaView style = {styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        placeholderTextColor='#c2c2c4'
        color= 'white'
        placeholder="title"
        value={title}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeSubtitle}
        placeholderTextColor='#c2c2c4'
        placeholder="subtitle"
        value={subtitle}
      />
      <Button
        title = "Add"
        color='black'
        onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: { title: title, subtitle: subtitle }
          })} }
      />
    </SafeAreaView>
  )
}


 const styles = StyleSheet.create({
   container: {
    alignItems: 'center',
    backgroundColor: '#565657',
    flex: 1,
    justifyContent: 'center'
   },
 });

export default Adding;
