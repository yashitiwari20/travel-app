import { View, Text ,Image} from 'react-native'
import React, {useEffect} from 'react'
import { router, useNavigation, useRouter } from 'expo-router'

export default function profile() {
  const navigation=useNavigation()
 
  useEffect(()=>{
    navigation.setOptions({headerShown:true,
      headerTransparent:true,
      headerTitle:''
      })},[]);
  return (
    
    
    <View style={{padding:25,paddingTop:75}}>
      <Text>Profile</Text>
      <View>
        <Image source={require('./../../assets/images/profile.png')} style={{hei}}/>
      </View>
    </View>
  )
}