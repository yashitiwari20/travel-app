import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { GetPhotoRef } from '../../service/googleplaceapi';

export default function HotelList({ hotelList }) {

  useEffect(()=>{
    GetGooglePhotoRef();},[]
  )
  const GetGooglePhotoRef=async()=>{
const result=await GetPhotoRef();
console.log(result);
  }
    
  const renderHotel = ({ item }) => (
    
    <View style={{marginTop:10,marginRight:20,width:180,flex:1}}>
        
      <Image source={require('./../../assets/images/facade.jpg')} style={{width:180,height:120,borderRadius:15,marginTop:8     }} />
      <Text style={{fontSize:16,marginTop:10,fontWeight:'700'}}>{item.HotelName}</Text>
      <Text style={{fontSize:16}}> {item['Hotel address']}</Text>
      <Text style={{fontSize:16,marginTop:10}}>⭐ Rating: {item.rating}</Text>
      
      
      <Text style={{fontSize:16,marginTop:5 }}>💰 Price: {item.Price}</Text>
      
      
    </View>
  );

  return (
    <View style={{backgroundColor:'#cccccc',borderRadius:19,padding:20 ,marginTop:10,borderWidth:1,height:405}}>
    
        <Text style={{fontSize:20,fontWeight:'700',marginBottom:10}}>🏢 Hotel Recommendation</Text>
    <FlatList
       horizontal={true}
       showsHorizontalScrollIndicator={false}
      data={hotelList}
      renderItem={renderHotel}
      keyExtractor={(item, index) => index.toString()
     
      }
      
     
    > </FlatList>
     </View>
  );
}



