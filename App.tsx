import 'react-native-gesture-handler';
import React from 'react';
import {
 SafeAreaView,
 ScrollView,
 StatusBar,
 StyleSheet,
 Text,
 useColorScheme,
 View,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './component/home/Home';
import Adding from './component/adding/Adding';
import Detail from './component/detail/Detail';


import {
 Colors,
 DebugInstructions,
 Header,
 LearnMoreLinks,
 ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();


class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator
           mode="modal"
           initialRouteName="Home"
           headerMode="screen"
           screenOptions={{
             headerShown: false
           }}
         >
           <Stack.Screen
             name="Home"
             component={Home}

           />
           <Stack.Screen
             name="Detail"
             component={Detail}
           />
           <Stack.Screen
             name="Adding"
             component={Adding}
           />
         </Stack.Navigator>
       </NavigationContainer>

    )
  }
}

 export default App;
