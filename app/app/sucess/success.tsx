import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Success = () => {

    const content = (
        <>
            <Image />
            <View>
                <Text>Success !</Text>
                <Text>Your Data has been saved</Text>
                <Text>(Your data is being reviewed)</Text>
                <TouchableOpacity>ok</TouchableOpacity>
            </View>
        </>
    )

  return content
}

export default Success