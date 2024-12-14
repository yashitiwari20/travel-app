import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function StartNewTrip() {
 const router=useRouter();

  return (
    <View style={{padding:40,marginTop:30,display:'flex',alignItems:'center',gap:10}}>
            <Ionicons name="location-sharp" size={30} color="black" />
            <Text style={{fontSize:25,fontWeight:'600',marginTop:10}}>No trips planned yet</Text>
            <Text style={{fontSize:17,fontWeight:'300',marginTop:20,textAlign:'center',color:'grey'}}>Looks like its time to plan a new travel experience! </Text>
            <Text style={{fontSize:17,fontWeight:'400',marginTop:10,textAlign:'center'}}>Get Started below </Text>
       <View style={{padding:20}}>

       <TouchableOpacity onPress={()=>router.push('/create-trip/search-place')}
       style={{padding:10,border:2,borderRadius:15,
       backgroundColor:'black',paddingHorizontal:30,}} > 
       <Text style={{color:'white'}}> Start a trip</Text>
       </TouchableOpacity>
       </View>
    </View>

  )
}