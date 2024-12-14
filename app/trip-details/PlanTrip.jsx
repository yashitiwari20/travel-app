import { View, Text } from 'react-native';
import React from 'react';

export default function PlanTrip({ details }) {
  const placeDetails = details['Place Details'];

  // Extract the additional place details if they exist, excluding geo coordinates and place image URL
  //const { name: placeName, time: placeTime, description: placeDescription } = placeDetails || {};

  const sortedDays = Object.keys(details)
    .filter(key => !['Place Details', 'Best Time to Visit', 'Hotel Options', 'Flight Details', 'Important Notes'].includes(key))
    .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));

  return (
    <View style={{ backgroundColor: '#cccccc', borderRadius: 19, padding: 20, marginTop: 10, borderWidth: 1 }}>
      <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 10 }}>🚵‍♂️ Plan Trip</Text>
      {/*placeDetails && (
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 5 }}>📍 Place Details</Text>
          {placeName && <Text style={{ fontSize: 16 }}>Name: {placeName}</Text>}
          {placeTime && <Text style={{ fontSize: 16 }}>Time: {placeTime}</Text>}
          {placeDescription && <Text style={{ fontSize: 16 }}>{placeDescription}</Text>}
        </View>
      )*/}
      {sortedDays.map(key => (
        <View key={key} style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 5 }}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Text>

          {Object.entries(details[key]).map(([time, activities], index) => (
            <View key={index} style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: '500',marginTop:20 }}>{time}</Text>
            {Array.isArray(activities) && activities.length > 0 ? (
              activities.map((activity, activityIndex) => (
                <Text key={activityIndex} style={{ fontSize: 16 ,}}>
                  {typeof activity === 'object' ? JSON.stringify(activity) : activity}
                </Text>
              ))
            ) : typeof activities === 'object' && activities !== null ? (
             
              Object.keys(activities).map((activityKey, activityIndex) => (
                <Text key={activityIndex} style={{ fontSize: 16 ,marginTop:10}}>
                  {activities[activityKey]}
                </Text>
              ))
            ) : (
              <Text>No activities available</Text>
            )}
          </View>
          ))}
        </View>
      ))}
    </View>
  );
}
