import { View,Text ,Image,StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';



export default function Login(){

  /*for adding navigation connect pages */
  const router=useRouter();
  /*for expo */

  return(
    <View>
      <Image source={require('./../assets/images/main.jpg')} style={styles.image}/>
      <View style={styles.container}>
      <Text style={styles.imagetext}>
         Travel Planner
      </Text>
      <Text style={{fontSize:15,textAlign:'center',padding:10,margin:10}}>
         People don't take trips, trips take People</Text>
         <View style={{paddingTop:10}}>
        <TouchableOpacity style={styles.button}
       onPress={()=>router.push('auth/sign-in')}>
        <Text style={{color:Colors.WHITE,textAlign:'center'}}>
          Get Start
        </Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
  backgroundColor:'white',
  marginTop:-25,
  borderTopEndRadius:20,
  borderTopLeftRadius:30,
  height:'100%',
  padding:15,
},
  image:{
    width:370,
    height:500,
    
  },
  imagetext:{
    fontSize:30,
    textAlign:'center',
    fontWeight:'bold',
    marginTop:20

  },
  button:{
    backgroundColor:Colors.Primary,
    width:250,
    padding:15,
    borderRadius:99,
    marginStart:35,
  }


})