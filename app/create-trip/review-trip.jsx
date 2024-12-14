import { View, Text ,TouchableOpacity} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import {CreateTripContext} from './../../context/CreateTripContext'
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';

export default function Reviewtrip() {

    const {tripdata,SetTripdata}=useContext(CreateTripContext)
    const router=useRouter();
    
   const navigation=useNavigation();
   useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
   },[])


  return (
    <View style={{padding:25,paddingTop:75,backgroundColor:'white',height:'100%'}}>
      <Text style={{fontSize:25,fontWeight:'600',marginTop:5}}>Review your trip</Text>
      <View  style={{marginTop:15}}>
        <Text style={{fontSize:19}}>Before generating your trip, please review your selection</Text>
         <View style={{borderWidth:1,backgroundColor:'#B3B3B3',padding:15,borderRadius:15,marginTop:20}}>
        {/* detination info */}
          <View style={{marginTop:4,display:'flex',flexDirection:'row',gap:20,}}>
        <Ionicons name="location-sharp" size={34} color="black" />
        <View>
            <Text style={{fontSize:20}}>
             Destination
            </Text>
            <Text style={{fontSize:20}}>
             {tripdata?.locationInfo?.name}
            </Text>
        </View>
        </View>

        {/*date selected info */}
        <View style={{marginTop:25,display:'flex',flexDirection:'row',gap:20}}>
        <AntDesign name="calendar" size={24} color="black" />
        <View>
            <Text style={{fontSize:20}}>
             Travel Date
            </Text>
            <Text style={{fontSize:20}}>
             {moment(tripdata?.startDate).format('DD MMM')+" to "+moment(tripdata?.endDate).format('DD MMM')+" "}
             ({tripdata?.Totaldays} days)
            </Text>
        </View>
        </View>
        

        {/*travels info */}
        <View style={{marginTop:25,display:'flex',flexDirection:'row',gap:20}}>
        <AntDesign name="calendar" size={24} color="black" />
        <View>
            <Text style={{fontSize:20}}>
             Who is Traveling
            </Text>
            <Text style={{fontSize:20}}>
            {tripdata?.traveler?.title}
           </Text>
        </View>
        </View>

        {/*budget info */}
        <View style={{marginTop:25,display:'flex',flexDirection:'row',gap:20}}>
        <AntDesign name="calendar" size={24} color="black" />
        <View>
            <Text style={{fontSize:20}}>
             Budget
            </Text>
            <Text style={{fontSize:20}}>
            {tripdata?.budget}
           </Text>
        </View>
        </View>
        </View>
        
      </View>
      <TouchableOpacity style={{padding:15,backgroundColor:'black',borderRadius:15,marginTop:50}} 
      onPress={()=>router.push('/create-trip/generate-trip')}
      >
        <Text style={{color:'white',textAlign:'center'}}>Build  My trip</Text> 
      </TouchableOpacity>
    </View>
  )
}