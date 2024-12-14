import { View, Text ,FlatList, TouchableOpacity, ToastAndroid} from 'react-native'
import React, { useState,useEffect,useContext } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import {SelectBudgetOptions} from './../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard';
import {CreateTripContext} from './../../context/CreateTripContext'




export default function Selectbudget() {
    const [selectedOption,setSelectedOption]=useState()
    const navigation=useNavigation();
    const {tripdata,setTripdata}=useContext(CreateTripContext)
    const router=useRouter();

    useEffect(()=>{ navigation.setOptions({headerShown:true,
        headerTransparent:true,
        headerTitle:''
      })},[])
  
    useEffect(()=>{

        selectedOption&&setTripdata({...tripdata,
            budget:selectedOption?.title
        })
    },[selectedOption])

    const onClickContinue=()=>{
        if(!selectedOption){
            ToastAndroid.show('Select Your Budget',ToastAndroid.LONG);
            return ;
        }
        router.push('/create-trip/review-trip');
    }

  return (
    <View style={{padding:25,paddingTop:75,height:'100%',backgroundColor:'white'}}>
      <Text style={{fontSize:25,fontWeight:'600',marginTop:5}}>Budget</Text>
      <View style={{marginTop:15}}>
        <Text style={{fontSize:19}}>Choose spending habits for your trip</Text>
        <FlatList data={SelectBudgetOptions}
         renderItem={({item,index})=>
         <TouchableOpacity style={{marginTop:10}} 
          onPress={()=>setSelectedOption(item)}>
               <OptionCard option={item} selectedOption={selectedOption}/>
         </TouchableOpacity>}></FlatList>

      </View>
      <TouchableOpacity style={{padding:15,backgroundColor:'black',borderRadius:15,marginTop:35}} onPress={onClickContinue}>
        <Text style={{color:'white',textAlign:'center'}}>Continue</Text> 
      </TouchableOpacity>
    </View>
  )
}