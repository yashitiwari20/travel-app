import { View, Text, Image } from 'react-native';
import React from 'react';
import moment from 'moment';

export default function UserTripCard({ trip }) {
  const formatData = (data) => {
     
      return JSON.parse(data);
    }
  const tripData = formatData(trip.tripdata);

  return (
    <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}>
      <View style={{ marginTop: 10 }}>
        <Image 
          source={require('./../../assets/images/shimla.jpg')} 
          style={{ width: 100, height: 100 ,borderRadius:100 }}
        />
       
       {/*<Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+tripData.locationInfo?.photoRef+'&key='+'AIzaSyDzvorTAgAgLb4pFh2EaE8uKznApZQgMiI'}}
        style={{
           width: 100, height: 100 ,borderRadius:15
        }}/>*/}
      </View>
      <View >
        <Text style={{fontSize:17}}>
          {tripData.locationInfo.name}
        </Text>
        <Text style={{fontSize:15,color:'grey'}}> 
          {moment(tripData.startDate).format('MMMM Do YYYY')}
        </Text>
        <Text style={{fontSize:15,color:'grey'}}> 
          {tripData.traveler.title}
        </Text>
      </View>
    </View>
  );
}
