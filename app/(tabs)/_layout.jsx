import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import {Colors} from '../../constants/Colors'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Tablayout() {
  return (
    <Tabs screenOptions={{ headerShown:false,
      tabBarActiveTintColor:'black'
    }}
    >
      <Tabs.Screen name='mytrip'
      options={{tabBarIcon:({color})=>
      <Entypo name="location-pin" size={24} color={color} />,
      tabBarLabel:'My Trip'}}/>

      <Tabs.Screen options={{tabBarIcon:({color})=>
      <FontAwesome name="globe" size={24} color={color} />,
      tabBarLabel:'Discover'}}name='discover'/>

      <Tabs.Screen options={{tabBarIcon:({color})=>
     <Ionicons name="people" size={24} color={color}/>,
      tabBarLabel:'Profile'}} name='profile'/>
    </Tabs>
  )
}