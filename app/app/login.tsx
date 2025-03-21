import { View, Text, ImageBackground,TextInput, TouchableHighlight } from 'react-native'
import { useState, useEffect } from 'react'

const Login = () => {


  return (
    <>
      <View>
        <Text>Edit Profile</Text>
      </View>
      <View>
        <ImageBackground />
      </View>
      <View>
        <View>
          <Text>full Name</Text>
        <TextInput />
        </View>
        <View>
          <Text>phone number</Text>
        <TextInput />
        </View>
        <View>
          <Text>email</Text>
        <TextInput />
        </View>
        <View>
          <Text>Address</Text>
        <TextInput />
        </View>
      </View>
      <View>
        <TouchableHighlight>
          update data
        </TouchableHighlight>
      </View>
    </>
  )
}

export default Login