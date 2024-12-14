import { View, Text ,Image,TouchableOpacity,TextInput} from 'react-native'
import React, { useContext, useEffect ,useState} from 'react'
import { router, useNavigation, useRouter } from 'expo-router'
//import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {CreateTripContext} from './../../context/CreateTripContext'
import { Entypo } from '@expo/vector-icons';

export default function discover() {
  const navigation=useNavigation()
  const {tripdata,setTripdata}=useContext(CreateTripContext)
  const router=useRouter()
  const [location, setLocation] = useState('');

  useEffect(()=>{
  navigation.setOptions({headerShown:true,
    headerTransparent:true,
    headerTitle:''
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
  

  return (<View>
    <Image  source={require('./../../assets/images/world.jpg')} style={{width:'100',height:300,}}/>
    <View style={{padding:25,paddingTop:10,backgroundColor:'white',borderRadius:19,marginTop:-20,height:'100%'}}>
      
      <View style={{alignItems:'center',paddingBottom:20,paddingTop:45}}>
      <Entypo name="location" size={40} color="black" />
      </View>

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
    
     <View style={{paddingTop:10}}>
      <TouchableOpacity  onPress={handleLocationSubmit}
       style={{padding:10,border:2,borderRadius:15,
       backgroundColor:'black',paddingHorizontal:20,}} > 
       <Text style={{color:'white',textAlign:'center'}}> Begin</Text>
       </TouchableOpacity>
       

      </View>
      
       </View>
      
       </View>
  )
}