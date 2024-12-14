import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import moment from 'moment';
import FlightD from './../trip-details/FlightD';
import HotelList from './../trip-details/HotelList';
import PlanTrip from './PlanTrip';

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });

    try {
      if (trip) {
        const parsedTrip = JSON.parse(trip);
        const tripData = JSON.parse(parsedTrip.tripdata);
        const completeTripDetails = { ...tripData, triPlan: parsedTrip.triPlan };
        setTripDetails(completeTripDetails);
      }
    } catch (error) {
      console.error('Error parsing trip:', error.message);
    }
  }, [trip]);

  return (
    <ScrollView>
      <Image
        source={require('./../../assets/images/himachal.webp')}
        style={{
          width: '100%',
          height: 250,
          paddingTop: 70,
          resizeMode: 'cover',
        }}
      />
      <View
        style={{
          padding: 15,
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: -20,
        }}
      >
        {tripDetails ? (
          <View>
            <Text style={{ fontSize: 27, fontWeight: '800' }}>
              {tripDetails.locationInfo?.name}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
              <Text style={{ fontSize: 16, color: 'grey' }}>
                {moment(tripDetails.startDate).format('Do MMMM YYYY')}
              </Text>
              <Text style={{ marginHorizontal: 5, color: 'grey' }}> - </Text>
              <Text style={{ fontSize: 16, color: 'grey' }}>
                {moment(tripDetails.endDate).format('Do MMMM YYYY')}
              </Text>
            </View>
            <Text style={{ fontSize: 16, color: 'grey', marginTop: 3 }}>
              🚌 {tripDetails.traveler.title}
            </Text>

            {tripDetails.triPlan ? (
              <>
                <FlightD flightData={tripDetails.triPlan['Flight Details']} />
                <HotelList hotelList={tripDetails.triPlan['Hotel Options']} />
                <PlanTrip details={tripDetails.triPlan}/>
              </>
            ) : (
              <Text>No trip plan available</Text>
            )}
          </View>
        ) : (
          <Text>Loading trip details...</Text>
        )}
      </View>
    </ScrollView>
  );
}
