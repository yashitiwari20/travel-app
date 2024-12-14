import { View, Text ,Image,TouchableOpacity,TextInput} from 'react-native'
import React, { useContext, useEffect ,useState} from 'react'
import { router, useNavigation, useRouter } from 'expo-router'
//import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {CreateTripContext} from './../../context/CreateTripContext'
import { Entypo } from '@expo/vector-icons';

export default function searchPlace() {
  const navigation=useNavigation()
  const {tripdata,setTripdata}=useContext(CreateTripContext)
  const router=useRouter()
  const [location, setLocation] = useState('');

  useEffect(()=>{
  navigation.setOptions({headerShown:true,
    headerTransparent:true,
    headerTitle:'Search'
    })},[]);
    useEffect(()=>{console.log(tripdata);}),[tripdata]
  
    {/*temporary input */}
    const handleLocationSubmit = () => {
      if (location.trim()) {
        setTripdata({
          ...tripdata,
          locationInfo: {
            name: location,
            coordinates: null,
            photoRef: null,
            url: null
          }
        });
        router.push('/create-trip/select-traveler');
      }
    };
  

  return (
    <View style={{padding:25,paddingTop:75,backgroundColor:'white',height:'100%'}}>
      <View style={{paddingTop:40,paddingBottom:50}}>
      
      <Image  source={require('./../../assets/images/Group 36.png')}/>
      </View>
      <View style={{alignItems:'center',paddingBottom:20}}>
      <Entypo name="location" size={40} color="black" />
      </View>
    { /* ........ work with google api key..........
    <GooglePlacesAutocomplete
      placeholder='Search Place'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        //{console.log(data.description);
       // console.log(details?.geometry.location);
        //console.log(details?.photos[0]?.photo_referece);
        //console.log(details?.url);
         }
        setTripdata(
          {locationInfo:{
          name:data.description,
          coordinates:details?.geometry.location,
          photoRef:details?.photos[0]?.photo_referece,
          url:details?.url
        }});
        router.push('/create-trip/select-traveler')

      }}
    
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_KEY,
        language: 'en',
      }}  
      styles={{textInputContainer:{
         borderWidth:1,borderRadius:5,marginTop:25,
      }}}
     />
     ............*/}
     <TextInput
        placeholder='Search Place'
        value={location}
        onChangeText={setLocation}
        style={{
          borderWidth: 1,
          borderRadius: 5,
          marginTop: 25,
          marginBottom:25,
          padding: 10,
          fontSize: 18,
        }}
      />
     
      <TouchableOpacity  onPress={handleLocationSubmit}
      //onPress={()=>router.push('/create-trip/select-traveler')}
       style={{padding:10,border:2,borderRadius:15,
       backgroundColor:'black',paddingHorizontal:20,}} > 
       <Text style={{color:'white',textAlign:'center'}}> Begin</Text>
       </TouchableOpacity>
       
    </View>
  )
}