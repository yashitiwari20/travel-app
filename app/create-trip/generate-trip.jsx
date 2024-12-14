import { View, Text ,Image} from 'react-native'
import React, { useContext, useEffect,useState } from 'react'
import {CreateTripContext} from './../../context/CreateTripContext'
import {AI_PROMPT} from './../../constants/Options'
import { chatSession } from './../../config/AIModel'
import { useRouter } from 'expo-router'
import {auth,db} from './../../config/firebaseconfig'
import { doc, setDoc } from 'firebase/firestore';

export default function Generatetrip() {
  
   const {tripdata,SetTripdata}=useContext(CreateTripContext)
   const [loading,setLoading]=useState(false);
   const router=useRouter();
   const user=auth.currentUser;
  
   useEffect(()=>{
      GenerateAiTrip()
  },[])

  /*use async for await */

  const GenerateAiTrip=async()=>{

       setLoading(true);
       const FINAL_PROMPT=AI_PROMPT
       .replace('{location}',tripdata?.locationInfo?.name)
      
       .replace('{totalDAY}',tripdata?.Totaldays)
       .replace('{totalNight}',tripdata?.Totaldays-1)
       .replace('{traveler}',tripdata?.traveler?.title)
       .replace('{budget}',tripdata?.budget)
       .replace('{totalDays}',tripdata?.Totaldays)
       .replace('{totalNight}',tripdata?.Totaldays-1)
       

       console.log(FINAL_PROMPT);
       
   const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
     const tripResp=JSON.parse(result.response.text())

    setLoading(false)
    const docId=(Date.now()).toString();
    const result_=await setDoc(doc(db,"UserTrips",docId),{
      userEmail:user.email,
      triPlan:tripResp,//ai result
      tripdata:JSON.stringify(tripdata),//user selection data
      docId:docId 
      
    })
    
   
    router.push('(tabs)/mytrip');
   
  }
  return (
    <View style={{
        padding:25,paddingTop:75,backgroundColor:'white',height:'100%'
    }}>
      <Text style={{fontSize:35,fontWeight:'600',textAlign:'center'}}>Please Wait...</Text>
      <Text style={{ fontSize:20,fontWeight:'450',marginTop:50,textAlign:'center'}}>We are working to generate your trip</Text>
      <View style={{padding:100}}>
    <Image source={require('./../../assets/images/1474.gif')} style={{height:100,width:100,}}/>
    </View>
    <Text style={{fontSize:20,textAlign:'center',fontWeight:'400',color:'grey'}}>Don't go back</Text>
    </View>
  )
}