import { View, Text ,TextInput,StyleSheet,TouchableOpacity, ToastAndroid} from 'react-native'
import { useNavigation, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "./../../../config/firebaseconfig"



export default function SignUp() {


  const router=useRouter();
   
  const [email,setEmal]=useState();
  const [password,setPassword]=useState();
  const [fullname,setFullname]=useState();



  /*for removing header  */
  const navigation=useNavigation();
  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])
  /*till here */
    
  /*fire base authentication fron config=>firebaseconfig */
 const Oncreateaccount=()=>{
  if(!email&&!password&&!fullname)
  { ToastAndroid.show('Please enter all details',ToastAndroid.BOTTOM);
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    router.replace('/mytrip')
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode)
    // ..
  });
 }

  return (
    <View style={{padding:25,paddingTop:50,backgroundColor:Colors.WHITE,height:'100%'}}>
      
     {/* for working of backward button */}
      <TouchableOpacity onPress={()=>router.back}>
      <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

        <Text style={{fontSize:25,paddingTop:20,textAlign:'center'}}>Create New Account</Text>
      
      {/*user full name */}
        <View>
        <Text style={{marginTop:30}}>Full Name</Text>
        <TextInput placeholder='Enter Full Name' style={styles.input} onChangeText={(value)=>setFullname(value)}></TextInput>
        </View>
        
      
      {/*email */}
       <View>
       <Text style={{marginTop:20}}>Email</Text>
       <TextInput placeholder='Enter Email' style={styles.input} onChangeText={(value)=>setEmal(value)}></TextInput>
       </View>
       
      {/*password */}
       <View>
       <Text style={{marginTop:20}}>Password</Text>
       <TextInput placeholder='Enter Password' style={styles.input} onChangeText={(value)=>setPassword(value)} secureTextEntry={true}></TextInput>
       </View>
 


      {/* Create Account anddd conecct to firebase create account*/}
       <TouchableOpacity onPress={Oncreateaccount} style={{backgroundColor:'black',width:300,padding:10,marginTop:35,borderRadius:15,alignItems:'center',borderColor:Colors.BLACK,borderWidth:1}}>
       <Text style={{fontSize:18,textAlign:'center',color:'white'}}>Create Account</Text>
       </TouchableOpacity>
       


      {/*sign-in button */}
       <TouchableOpacity style={{padding:10,borderWidth:1,borderRadius:15,marginTop:35,width:300}} onPress={()=>router.replace('auth/sign-in')}>
       <Text style={{fontSize:18,textAlign:'center'}}>Sign In</Text>
       </TouchableOpacity>
       </View> 
      
  )
}
const styles = StyleSheet.create({
  input:{
    padding:10,
    borderColor:'grey',
    borderRadius:12,
    borderWidth:1,
    marginTop:5
  }
})