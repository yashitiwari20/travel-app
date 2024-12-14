import { View, Text ,StyleSheet,TextInput,TouchableOpacity, ToastAndroid} from 'react-native'
import React, { useEffect,useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./../../../config/firebaseconfig" 

export default function SignIn() {


  const auth = getAuth();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  
  const onSignin=()=>{
    if(!email&&!password){
      ToastAndroid.show("Please Enter Email and Password",ToastAndroid.BOTTOM)
      return;
    }
 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip')
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
    if(errorCode=='auth/invalid-credential'){
      ToastAndroid.show("Invalid credential",ToastAndroid.LONG)
    }
  });
}
  const router=useRouter();

  /*for removing header  */
  const navigation=useNavigation();
  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])
  /*till here */

  return (
       <View style={{padding:25,
        paddingTop:50,
        backgroundColor:Colors.WHITE,height:'100%'
       }}>
      
      {/* for working of backward button */}
       <TouchableOpacity onPress={()=>router.back()}>
       <Ionicons name="arrow-back" size={24} color="black" />
       </TouchableOpacity>

      <Text style={{fontSize:25,marginTop:30,textAlign:'center'}}>
        Let's Sign You In
      </Text>
      
      

      

      {/*email */}
        <View style={styles.inputview} >
        <Text style={{marginTop:5}}>Email</Text>
        <TextInput placeholder='Enter Email' style={styles.input} onChangeText={(value)=>setEmail(value)}></TextInput>
        </View>
        
      {/*password */}
        <View style={{marginTop:20}} >
        <Text style={{marginTop:5}}>Password</Text>
        <TextInput placeholder='Enter Password' style={styles.input} secureTextEntry={true} onChangeText={(value)=>setPassword(value)}></TextInput>
        </View>
       

      {/* signin button */}
        <TouchableOpacity style={{width:300,backgroundColor:'black',padding:15,marginTop:60,borderRadius:15,alignItems:'center',}} onPress={onSignin}>
        <Text style={{color:'white'}}>Sign In</Text>
        </TouchableOpacity>

      {/*create button */}
        <TouchableOpacity style={{padding:10,borderWidth:1,borderRadius:15,marginTop:30,width:300}} onPress={()=>router.replace('auth/sign-up')}>
        <Text style={{fontSize:18,textAlign:'center'}}>Create Account</Text>
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
 },
 inputview:{
  marginTop:45,
 }
})