import { ChatScreen } from '@/components/chats/ChatScreen'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function StatusScreen() {
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    headerImage={
      <Image
        source={require('@/assets/images/partial-react-logo.png')}
        style={styles.reactLogo}
      />
    }>
    <ChatScreen/>
    </ParallaxScrollView>  )
}

const styles = StyleSheet.create({
    reactLogo: {
        flex: 0
    }
})
