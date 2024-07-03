import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TAB1 from './tab1';
import TAB2 from './tab2';
import TAB3 from './tab3';
import TAB4 from './tab4';

export default class Welcome extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render() {

const Tab = createBottomTabNavigator();

    return (

      <Tab.Navigator>
        <Tab.Screen name="tab1" component={TAB1} options={{headerShown:false, tabBarLabel:'LIGAS',
         tabBarIcon:({stext})=>(
           <Ionicons name="rocket-outline" color="black" size={25}/>
         ) }} />
        <Tab.Screen name="tab2" component={TAB2} options={{headerShown:false, tabBarLabel:'EQUIPOS',
         tabBarIcon:({stext})=>(
           <Ionicons name="football-outline" color="black" size={25}/>
         ) }} />
         <Tab.Screen name="tab3" component={TAB3} options={{headerShown:false, tabBarLabel:'ESTADIOS',
         tabBarIcon:({stext})=>(
           <Ionicons name="earth-outline" color="black" size={25}/>
         ) }} />
         <Tab.Screen name="tab4" component={TAB4} options={{headerShown:false, tabBarLabel:'PLAYERS',
         tabBarIcon:({stext})=>(
           <Ionicons name="people-circle-outline" color="black" size={25}/>
         ) }} />
      </Tab.Navigator>
    );
  }
}
