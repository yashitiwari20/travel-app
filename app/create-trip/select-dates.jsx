import { View, Text ,TouchableOpacity, ToastAndroid} from 'react-native'
import React,{useContext, useEffect, useState} from 'react'
import { useNavigation, useRouter } from 'expo-router';
import CalendarPicker from 'react-native-calendar-picker'
import moment from 'moment';
import {CreateTripContext} from './../../context/CreateTripContext'


export default function selectdates() {
    const navigation=useNavigation();
  useEffect(()=>{ navigation.setOptions({headerShown:true,
    headerTransparent:true,
    headerTitle:''
  })},[])
   
  const [startDate,setStartDate]=useState();
  const [endDate,setEndDate]=useState();
  const {tripdata,setTripdata}=useContext(CreateTripContext)
  const router=useRouter();

  const onDateChange=(date,type)=>{
    console.log(date,type)
    if(type=='START_DATE')
    {
      setStartDate(moment(date))
    }
    else{
      setEndDate(moment(date))
    }

  }
  const onDateSelectionContinue=()=>{

    if(!startDate||!endDate){
      ToastAndroid.show('Please select Start and End Date',ToastAndroid.LONG)
      return;
    }
    
    const totaldays=endDate.diff(startDate,'days');
    console.log(totaldays+1);
    setTripdata({...tripdata,
      startDate:startDate,
      endDate:endDate,
      Totaldays:totaldays+1,
});
   router.push('/create-trip/select-budget');
  };


  
  return (
    <View style={{padding:25,height:"100%",backgroundColor:'white',paddingTop:75}}>
        <Text style={{fontSize:25,fontWeight:'600'}}>Travel Dates</Text>
        <View style={{marginTop:30}}>
        <CalendarPicker onDateChange={onDateChange}
      allowRangeSelection={true} 
      minDate={new Date()}
      maxRangeDuration={5}
       selectedRangeStyle={{backgroundColor:'black'}}
        selectedDayTextStyle={{color:'white'}}/>
            
        
        </View>
        <TouchableOpacity  onPress={onDateSelectionContinue}
        style={{padding:15,backgroundColor:'black',borderRadius:15,marginTop:35}}> 
          <Text style={{color:'white',textAlign:'center',}}>Continue</Text>
        </TouchableOpacity>
    </View>
  )
}