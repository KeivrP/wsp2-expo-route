import Message from '@/components/chats/Message'
import React from 'react'
import { FlatList, ImageBackground, StyleSheet } from 'react-native'
import messages from '@/assets/data/message.json'
import bg from "@/assets/images/BG.png"
import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router'
import { ChatsList, User } from '@/components/chats/chats-types'

export default function chats() {
    const { id } = useLocalSearchParams<{id: string}>();

    
  return (
    <ImageBackground source={bg} style={styles.bg}>
    <FlatList
      data={messages}
      renderItem={({ item }) => <Message message={item} />}
              style={{ padding: 10 }}
              inverted
    />
  </ImageBackground>
  )
}


const styles = StyleSheet.create({
    bg: {
      flex: 1,
    },
    list: {
      padding: 10,
    },
  });