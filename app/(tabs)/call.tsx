import { Link, Navigator, router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function CallScreen() {
  const navigate = Navigator.Screen

  console.log(navigate);

  const touch = () => {
    console.log('Hey');
  }

  return (
    <>
    
    <Text>
        Llamadas
    </Text>
    <TouchableOpacity onPress={touch}>
      <Text>Hey</Text>
    </TouchableOpacity>
    </>
  )
}
