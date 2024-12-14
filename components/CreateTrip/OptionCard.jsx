import { View, Text } from 'react-native'
import React from 'react'

export default function OptionCard({option,selectedOption}) {
  return (
    <View style={[{padding:17,display:'flex',
      flexDirection:'row',justifyContent:'space-between',
      backgroundColor:'#D4D4D4',marginTop:25,borderRadius:20
    },selectedOption?.id==option?.id&&{borderWidth:2,backgroundColor:'#B5B5B5'}]}>
        <View>
        <Text style={{fontSize:20}}>{option?.title}</Text>
        <Text style={{fontSize:17,color:'grey'}}>{option?.desc}</Text>
        </View>
        <Text style={{fontSize:35}}>{option.icon}</Text>
      
    </View>
  )
}