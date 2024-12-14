import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import StartNewTrip from '../../components/MyTrip/StartNewTrip';
import  {auth, db}  from './../../config/firebaseconfig'
import { collection, query, where, getDocs } from "firebase/firestore";
import { ActivityIndicator } from 'react-native';

import UserTripList from '../../components/MyTrip/UserTripList';

export default function myTrip() {

  const [userTrips,setUserTips]=useState([]);
  const user=auth.currentUser;
  const [loading,setLoading]=useState(false)


  useEffect(()=>{
   user&&GetMyTrips()
  },[user])

 const GetMyTrips=async()=>
 {setLoading(true) ;
  setUserTips([]);
  const q=query(collection(db,'UserTrips'),where('userEmail','==',user?.email))
  const querySnapshot=await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    setUserTips(prev=>[...prev,doc.data()])
  });
  setLoading(false);
 }
  return (
    <ScrollView style={{padding:25,paddingTop:55,backgroundColor:'white',height:'100%'}}>
      
      <View style={{display:'flex',flexDirection:'row',
        alignContent:'center',justifyContent:'space-between'
      }}>
       
      <Text style={{fontSize:22,fontWeight:'bold'}}>My Trips</Text>
      <Ionicons name="add-circle" size={30} color="black" />

      </View>

      {loading&&<ActivityIndicator  size={'large'} color={'black'} />}
      {
        userTrips?.length==0?<StartNewTrip/>
        :
        <UserTripList userTrips={userTrips}/>
      }
    </ScrollView>
  )
}