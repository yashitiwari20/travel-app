import { View, Text ,FlatList,TouchableOpacity} from 'react-native'
import React, { useEffect, useState,useContext } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {SelectTravelerlist} from './../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard';
import {CreateTripContext} from './../../context/CreateTripContext'

export default function Selecttraveler() {
    const navigation=useNavigation();
    const [selectedTraveler,setSelectedtraveler]=useState();
    const {tripdata,setTripdata}=useContext(CreateTripContext)
    
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,headerTransparent:true,
            headerTitle:''
        })
    },[])

    const router=useRouter()


    useEffect(()=>{
      setTripdata({...tripdata,traveler:selectedTraveler})},[selectedTraveler])
  
    useEffect(()=>{console.log(tripdata)},[tripdata])

  return (
    <View style={{
        padding:25,paddingTop:75,backgroundColor:'white',height:'100%'
    }}>
      <Text style={{fontSize:20,marginTop:10,fontWeight:'bold'}}>Who's Traveling</Text>
      <View style={{marginTop:10}}>
        <Text style={{fontSize:20}}>Choose your traveles</Text>
        <FlatList data={SelectTravelerlist}
        renderItem={({item,index})=>(
            <TouchableOpacity
            onPress={()=>setSelectedtraveler(item)}> 
                <OptionCard option={item} selectedOption={selectedTraveler}/>
            </TouchableOpacity>

        )}/>
      </View>
      <TouchableOpacity style={{padding:15,backgroundColor:'black',borderRadius:15,marginTop:35}} onPress={()=>router.push('/create-trip/select-dates')}>
        <Text style={{color:'white',textAlign:'center'}}>Continue</Text> 
      </TouchableOpacity>
    </View>
  )
}