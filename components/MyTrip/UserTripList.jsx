import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import moment from 'moment';
import UserTripCard from './UserTripCard';
import { useRouter } from 'expo-router';


export default function UserTripList({ userTrips }) {
   // Safely parse tripdata
  const LatestTrip = userTrips[0]?.tripdata ? JSON.parse(userTrips[0].tripdata) : null;
  router=useRouter();
 
  return userTrips&&(
    <View>
      <View style={{ marginTop: 20 }}>
       {LatestTrip.locationInfo?.photoRef?
        <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+LatestTrip.locationInfo?.photoRef+'&key='+'AIzaSyDzvorTAgAgLb4pFh2EaE8uKznApZQgMiI'}}
        style={{
          width: '100%',
          height: 200,
          paddingTop: 70,
          borderRadius: 15,
          objectFit: 'cover',
        }}/>:
       <Image source={require('./../../assets/images/shimla2.jpeg')}
          style={{
            width: '100%',
            height: 200,
            paddingTop: 70,
            borderRadius: 15,
            objectFit: 'cover',
          }}
        />}
        <View>         
          
              <Text style={{fontSize:20,paddingTop:10}}>
                {LatestTrip.locationInfo?.name}
              </Text>
              <View style={{ display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
              <Text style={{fontSize:16,color:'grey'}}>
                {moment(LatestTrip.startDate).format('MMMM Do YYYY')}
            </Text> 
             <Text style={{fontSize:16,color:'grey'}}> 🚌{LatestTrip.traveler.title} </Text> 
             
            </View> 
           
          <TouchableOpacity onPress={()=>router.push({pathname:'/trip-details',params:{
            trip:JSON.stringify(userTrips[0])
          }})}
          style={{backgroundColor:'black',padding:12,borderRadius:15,marginTop:20}}>
            <Text style={{color:'white',textAlign:'center'}}>
              See your plan
            </Text>
          </TouchableOpacity>
        </View>
         {userTrips.map((trip,index)=>(
          <UserTripCard trip={trip} key={index}/>
         ))}
      </View>
    </View>
  );
}
