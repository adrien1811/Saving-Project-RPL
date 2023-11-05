import { View, Text } from 'react-native'
import React from 'react'

const Header = (props) => {
  return (
    <View style={{
        flexDirection:'row'
     }}>
      <Text style={{
        fontSize:20, 
        color:'white'
        }}>
        {props.name}
      </Text>
        
    </View>
  )
}

export default Header