import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function FlightD({ flightData }) {
  if (!flightData) {
    return <Text>No flight information available.</Text>;
  }

  return (
    <View style={{ backgroundColor: '#cccccc', borderRadius: 19, padding: 20, marginTop: 10, borderWidth: 1 }}>
      <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 10 }}>🛫 Flights</Text>
      <View>
        <Text style={{ fontSize: 16 }}>Airline: {flightData.Flight}</Text>
        <Text style={{ fontSize: 16 }}>Price: {flightData.Price}</Text>
       
        <TouchableOpacity style={{ backgroundColor: 'black', padding: 5, width: 100, borderRadius: 10, marginTop: 8 }}>
          <Text style={{ fontSize: 16, color: 'white', textAlign: 'center' }} onPress={() => window.open(flightData["Booking URL"], "_blank")}>
            Book Here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
