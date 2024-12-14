import { Stack } from "expo-router";
import {CreateTripContext} from '../context/CreateTripContext'
import { useState } from "react";

export default function RootLayout() {


  const [tripdata,setTripdata]=useState([])


  return (
    <CreateTripContext.Provider value={{tripdata,setTripdata}}>
    <Stack screenOptions={{ headerShown:false}}>
      {/*<Stack.Screen name="index"  options={{

        headerShown:false
      }}/>*/}
      <Stack.Screen name="{tabs}"/>
    </Stack>
    </CreateTripContext.Provider>
  );
}
